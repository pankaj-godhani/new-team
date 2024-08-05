import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/testingTeamTab/index.html")
@PreventIframe("/testingTeamTab/config.html")
@PreventIframe("/testingTeamTab/remove.html")
export class TestingTeamTab {
}
