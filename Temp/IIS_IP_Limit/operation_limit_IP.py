# -*- coding: utf-8 -*-
# This file is auto-generated, don't edit it. Thanks.
import os
import sys

from typing import List

from alibabacloud_ecs20140526.client import Client as Ecs20140526Client
from alibabacloud_tea_openapi import models as open_api_models
from alibabacloud_ecs20140526 import models as ecs_20140526_models
from alibabacloud_tea_util import models as util_models
from alibabacloud_tea_util.client import Client as UtilClient


class Sample:
    group_ids = []
    temp_group_ips = []

    def __init__(self):
        pass

    @staticmethod
    def get_group_ids():
        try:
            if len(Sample.group_ids) == 0:
                security_group = os.environ['SECURITY_GROUP']
                Sample.group_ids = security_group.split(',')
        except Exception as ex:
            print(ex)

    @staticmethod
    def create_client() -> Ecs20140526Client:
        """
        使用AK&SK初始化账号Client
        @return: Client
        @throws Exception
        """
        # 工程代码泄露可能会导致 AccessKey 泄露，并威胁账号下所有资源的安全性。以下代码示例仅供参考。
        # 建议使用更安全的 STS 方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/378659.html。
        try:
            config = open_api_models.Config(
                # 必填，请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_ID。,
                access_key_id=os.environ['ALIBABA_CLOUD_ACCESS_KEY_ID'],
                # 必填，请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_SECRET。,
                access_key_secret=os.environ['ALIBABA_CLOUD_ACCESS_KEY_SECRET']
            )
            # Endpoint 请参考 https://api.aliyun.com/product/Ecs
            config.endpoint = f'ecs-cn-hangzhou.aliyuncs.com'
            return Ecs20140526Client(config)
        except Exception as ex:
            print(ex)

    @staticmethod
    def main(
            args: List[str],
    ) -> None:
        client = Sample.create_client()
        runtime = util_models.RuntimeOptions()
        Sample.get_group_ids()
        for gruop_name in Sample.group_ids:
            describe_security_group_attribute_request = ecs_20140526_models.DescribeSecurityGroupAttributeRequest(
                region_id='cn-hangzhou',
                security_group_id=gruop_name
            )
            try:
                # 复制代码运行请自行打印 API 的返回值
                ips = client.describe_security_group_attribute_with_options(describe_security_group_attribute_request,
                                                                            runtime)
                # {'create_time': '2024-09-25T05:47:04Z', 'description': '睦胜', 'dest_cidr_ip': '', 'dest_group_id': '',
                #  'dest_group_name': '', 'dest_group_owner_account': '', 'dest_prefix_list_id': '',
                #  'dest_prefix_list_name': '', 'direction': 'ingress', 'ip_protocol': 'TCP', 'ipv_6dest_cidr_ip': '',
                #  'ipv_6source_cidr_ip': '', 'nic_type': 'intranet', 'policy': 'Accept', 'port_range': '80/443',
                #  'priority': 1, 'security_group_rule_id': 'sgr-bp1i55o01mmiaus9730b', 'source_cidr_ip': '119.39.248.98',
                #  'source_group_id': '', 'source_group_name': '', 'source_group_owner_account': '',
                #  'source_port_range': '', 'source_prefix_list_id': '', 'source_prefix_list_name': ''}

                # Sample.temp_group_ips.append(ips.body.permissions.permission)
                for ip in ips.body.permissions.permission:
                    data_dict = ip.__dict__
                    if data_dict['source_cidr_ip'].startswith(args[0]):
                        print(
                            f"是否允许:【{data_dict['policy']}】 优先级:【{data_dict['priority']}】 安全组名:【{gruop_name}】 源IP:【{data_dict['source_cidr_ip']}】 描述:【{data_dict['description']}】 创建时间:【{data_dict['create_time']}】")

            except Exception as error:
                # 此处仅做打印展示，请谨慎对待异常处理，在工程项目中切勿直接忽略异常。
                # 错误 message
                print(error.message)
                # 诊断地址
                print(error.data.get("Recommend"))
                UtilClient.assert_as_string(error.message)

    @staticmethod
    async def main_async(
            args: List[str],
    ) -> None:
        client = Sample.create_client()
        describe_security_group_attribute_request = ecs_20140526_models.DescribeSecurityGroupAttributeRequest(
            region_id='cn-hangzhou',
            security_group_id='sg-bp1fb9izx957135qhtqu'
        )
        runtime = util_models.RuntimeOptions()
        try:
            # 复制代码运行请自行打印 API 的返回值
            await client.describe_security_group_attribute_with_options_async(describe_security_group_attribute_request,
                                                                              runtime)
        except Exception as error:
            # 此处仅做打印展示，请谨慎对待异常处理，在工程项目中切勿直接忽略异常。
            # 错误 message
            print(error.message)
            # 诊断地址
            print(error.data.get("Recommend"))
            UtilClient.assert_as_string(error.message)


if __name__ == '__main__':
    while True:
        ip = input('输入ip:')
        ip = ip.lstrip().rstrip()
        while ip == '':
            ip = input('输入ip:')

        Sample.main([ip])
