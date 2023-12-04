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

  availability_zone = "ap-northeast-1a"

  cidr_block = "10.0.1.0/24"
  tags = {
    Name = "handson-public-1a"
  }
}

resource "aws_subnet" "public_1c" {
  vpc_id = aws_vpc.main.id

  availability_zone = "ap-northeast-1c"

  cidr_block = "10.0.2.0/24"

  tags = {
    Name = "handson-public-1c"
  }
}

resource "aws_subnet" "public_1d" {
  vpc_id = aws_vpc.main.id

  availability_zone = "ap-northeast-1d"

  cidr_block = "10.0.3.0/24"

  tags = {
    Name = "handson-public-1d"
  }
}

# Private Subnets
resource "aws_subnet" "private_1a" {
  vpc_id = aws_vpc.main.id

  availability_zone = "ap-northeast-1a"
  cidr_block        = "10.0.10.0/24"

  tags = {
    Name = "handson-private-1a"
  }
}

resource "aws_subnet" "private_1c" {
  vpc_id = aws_vpc.main.id

  availability_zone = "ap-northeast-1c"
  cidr_block        = "10.0.20.0/24"

  tags = {
    Name = "handson-private-1c"
  }
}

resource "aws_subnet" "private_1d" {
  vpc_id = aws_vpc.main.id

  availability_zone = "ap-northeast-1d"
  cidr_block        = "10.0.30.0/24"

  tags = {
    Name = "handson-private-1d"
  }
}

resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id


  tags = {
    Name = "handson"
  }

}
