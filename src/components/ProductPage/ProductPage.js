import "./ProductPage.css";
import { Link, useParams } from "react-router-dom";
import React from "react";

export default function ProductPage() {
  let { id } = useParams();
  return <Link to={`/`}>{id}</Link>;
}
