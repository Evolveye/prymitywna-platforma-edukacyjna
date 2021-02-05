import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/meetLayout.js"
import { authFetch } from "../../utils/auth.js"
import { urlSearchParams } from "../../utils/functions.js"
import URLS from "../../utils/urls.js"

// import classes from "./meet.module.css"

export default () => {
  const query = urlSearchParams()
  const href = `/group/it?platformId=${query.get(
    "platformId"
  )}&groupId=${query.get("groupId")}`

  return (
    <Layout className="is-centered">
      <Link className="return_link" to={href}>
        Powrót do widoku grupy
      </Link>

      <h1>Spotkanie</h1>
      <div>Twoje miejsce na reklamę</div>
    </Layout>
  )
}
