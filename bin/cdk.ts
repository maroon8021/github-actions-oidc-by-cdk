#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { Environment } from "aws-cdk-lib";
import { GithubActionsOIDCProvider } from "../lib/iam";

const env: Environment = {
  region: "ap-northeast-1",
};

const app = new cdk.App();

new GithubActionsOIDCProvider(app, "GithubActionsOIDCProvider");
