provider "aws" {
  shared_config_files      = ["$HOME/.aws/config"]
  shared_credentials_files = ["$HOME/.aws/credentials"]
  region                   = "ap-northeast-1"
  profile                  = "yish0.admin"
}


resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "handson"
  }
}

resource "aws_subnet" "name" {
  vpc_id = aws_vpc.main.id

  availability_zone = "ap-northeast-1"

  cidr_block = "10.0.1.0/24"
  tags = {
    Name = "handson-public-1a"
  }
}
