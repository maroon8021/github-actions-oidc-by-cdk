import { Stack, StackProps, aws_iam as iam } from "aws-cdk-lib";
import { Construct } from "constructs";

export class GithubActionsOIDCProvider extends Stack {
  public readonly role: iam.Role;
  public readonly user: iam.User;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new iam.OpenIdConnectProvider(this, "github-actions-oidc-provider", {
      url: "https://token.actions.githubusercontent.com",
      clientIds: ["sts.amazonaws.com"],
    });
  }
}
