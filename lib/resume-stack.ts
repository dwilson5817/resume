import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import * as path from 'node:path';

export class ResumeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'ResumeBucket', {
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    new s3deploy.BucketDeployment(this, 'DeployResume', {
      sources: [ s3deploy.Source.asset(path.join(__dirname, '../resume/out')) ],
      destinationBucket: bucket,
    });

    new cdk.CfnOutput(this, 'ResumeBucket', {
      value: bucket.bucketArn,
      exportName: 'ResumeBucket',
    });
  }
}
