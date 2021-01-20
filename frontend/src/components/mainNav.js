import React from "react"
import { Link } from "gatsby"

import classes from "./mainNav.module.css"

export default () => (
  <>
    <ul className={classes.list}>
      <li><Link className={classes.item} to="login">Zaloguj się</Link></li>
      <li><Link className={classes.item} to="login">Zarejestruj się</Link></li>
    </ul>
  </>
)
