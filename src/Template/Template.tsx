import "./Template.scss";
import "../iconFont.css";

// Library Level
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as SDK from "azure-devops-extension-sdk";
import {
  CustomHeader,
  HeaderDescription,
  HeaderTitle,
  HeaderTitleArea,
  HeaderTitleRow,
  TitleSize,
} from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";
import { ITemplateState } from "./ITemplate.state";

/**
 * The status report page.
 */
class Template extends React.Component<{}, ITemplateState> {
 
  constructor(props: {}) {
    super(props);
  }

  /**
   * Attach the events.
   */
  private initEvents(): void {
    // This is required due to JS closures.
    const self = this;

  }

  /**
   * @inheritdoc
   *
   * Note: This is essentially called as part of react lifecycle.
   * https://reactjs.org/docs/state-and-lifecycle.html
   */
  public componentDidMount() {
    this.performMountAsync();
  }

  /**
   * Mount activiites that are async.
   */
  private async performMountAsync(): Promise<void> {
    await SDK.init();
  }

  public render(): JSX.Element {
    return (
      <Page className="flex-grow" key="statusPage">
        <CustomHeader className="bolt-header-with-commandbar">
          <HeaderTitleArea>
            <HeaderTitleRow>
              <HeaderTitle
                className="text-ellipsis"
                titleSize={TitleSize.Large}
              >
                Template
              </HeaderTitle>
            </HeaderTitleRow>
            <HeaderDescription>
              FILL IN
            </HeaderDescription>
          </HeaderTitleArea>
        </CustomHeader>
        <div className="page-content-left page-content-right page-content-top">
          {/** Page header only for printing */}
          <div className="flex-row padding-vertical-4 only-on-print title-m">
            <div className="flex-column" style={{ width: "90%" }}>
            FILL IN
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

ReactDOM.render(<Template />, document.getElementById("root"));
