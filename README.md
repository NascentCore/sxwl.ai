# nascentcore.ai

初芯公司主页

初芯为大模型研究者提供媲美 Google、OpenAI 的训练平台，支持单集群千张 A100/800 GPU。

## Deployment

```
# Login AWS machine
ssh -i dev-env/aws/ec2/key_pairs/us-east-1/tricorder.dev.pem ubuntu@tricorder.dev
cd nascentcore.ai
git pull
devops/redeploy.sh
```
