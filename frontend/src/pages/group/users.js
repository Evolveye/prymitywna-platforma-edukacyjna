import React from "react"
import { Link } from "gatsby"

import { urlSearchParams, translateRole } from "../../utils/functions.js"
import URLS from "../../utils/urls.js"

import Layout from "../../components/groupLayout.js"
import TableForm from "../../components/tableForm.js"
import Select from "../../components/select.js"

export default class PlatformGroups extends React.Component {
  constructor(props) {
    super(props)

    const query = urlSearchParams()

    this.platformId = query.get(`platformId`)
    this.groupId = query.get(`groupId`)
    this.href = `/group/it?platformId=${this.platformId}&groupId=${this.groupId}`
  }

  render = () => (
    <Layout className="is-centered">
      <Link className="return_link" to={this.href}>
        Powrót do widoku grupy
      </Link>

      <h1>Grupa -- użytkownicy</h1>

      <TableForm
        fetchPostAddress={URLS.GROUP$ID_USERS_POST.replace(
          `:groupId`,
          this.groupId
        )}
        fetchGetAddress={URLS.GROUP$ID_USERS_GET.replace(
          `:groupId`,
          this.groupId
        )}
        fetchDeleteAddress={URLS.GROUP$ID_USERS$ID_DELETE}
        deleteIdParameterName=":userId"
        responseGetDataName="users"
        buttonAdd="Dodaj do grupy"
        buttonDelete="Usuń z grupy"
        staticPostBodyData={{ groupId: this.groupId }}
        objectsFields={[`name`, `surname`,
          { name: `perms`, processor: (perm={}) => translateRole(perm.name, `Student`) },
        ]}
        titleFields={[`Imię`, `Nazwisko`, `Rola`]}
        inputFieldsComponents={{
          name: {
            component: Select,
            onTableFillTrigger: `fetch`,
            props: {
              name: `userId`,
              autoFetch: false,
              fetchDataAddress: URLS.PLATFORM$ID_USERS_GET.replace(
                `:platformId`,
                this.platformId
              ),
              fetchGetDataName: "users",
              fetchDataFilter(field) {
                for (const { id } of this.getTableData())
                  if (field.id === id) return false

                return true
              },
              fetchDataProcessor({ id, name, surname }) {
                return { value: id, text: `${name} ${surname}` }
              },
            },
          },
          perms: {
            component: Select,
            props: {
              name: `userId`,
              disabled: true,
              fetchDataAddress: URLS.GROUP$ID_PERMISSIONS_GET.replace(
                `:groupId`,
                this.groupId
              ),
              fetchGetDataName: "permissions",
              fetchDataProcessor: ({ id, name }) => ({ value: id, text:name }),
            },
          },
        }}
        colSpans={{ name: 2 }}
      />
    </Layout>
  )
}
