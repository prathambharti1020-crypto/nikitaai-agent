import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.vercel.com",
  description: "Deploy agents and apps, manage projects, and more.",
  auth: connect("mcp.vercel.com/prj_97FXLbC01OaaiF7GoDGfZWvAhrjA"),
});
