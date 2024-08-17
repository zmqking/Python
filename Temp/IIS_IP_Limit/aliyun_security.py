# -*- coding: utf-8 -*-
# This file is auto-generated, don't edit it. Thanks.
import sys

import os
from typing import List

from alibabacloud_ecs20140526.client import Client as ECSClient
from alibabacloud_tea_openapi import models as open_api_models
from alibabacloud_darabonba_env.client import Client as EnvClient
from alibabacloud_ecs20140526 import models as ecs_models
from alibabacloud_tea_console.client import Client as ConsoleClient


class Sample:
    def __init__(self):
        pass

    @staticmethod
    def initialization(
            region_id: str,
    ) -> ECSClient:
        config = open_api_models.Config()
        print(os.environ['ALIBABA_CLOUD_ACCESS_KEY_ID'])
        # 您的AccessKey ID
        config.access_key_id = os.environ['ALIBABA_CLOUD_ACCESS_KEY_ID']
        # 您的AccessKey Secret
        config.access_key_secret = os.environ['ALIBABA_CLOUD_ACCESS_KEY_SECRET']
        # 您的可用区ID
        config.region_id = region_id
        return ECSClient(config)

    @staticmethod
    def describe_security_group_attribute(
            client: ECSClient,
            security_group_id: str,
            region_id: str,
    ) -> ecs_models.DescribeSecurityGroupAttributeResponse:
        req = ecs_models.DescribeSecurityGroupAttributeRequest()
        req.region_id = region_id
        req.security_group_id = security_group_id
        req.direction = 'all'
        resp = client.describe_security_group_attribute(req)
        return resp

    @staticmethod
    async def describe_security_group_attribute_async(
            client: ECSClient,
            security_group_id: str,
            region_id: str,
    ) -> ecs_models.DescribeSecurityGroupAttributeResponse:
        req = ecs_models.DescribeSecurityGroupAttributeRequest()
        req.region_id = region_id
        req.security_group_id = security_group_id
        req.direction = 'all'
        resp = await client.describe_security_group_attribute_async(req)
        return resp

    @staticmethod
    def authorize_security_group(
            client: ECSClient,
            security_group_id: str,
            region_id: str,
            port_range: str,
            nic_type: str,
            policy: str,
            proiority: str,
            source_cidr_ip: str,
    ) -> None:
        req = ecs_models.AuthorizeSecurityGroupRequest()
        # 目标安全组地域ID。
        req.region_id = region_id
        # 目标安全组ID。
        req.security_group_id = security_group_id
        # 传输层协议。取值大小写敏感。取值范围：tcp udp icmp gre all：支持所有协议。
        req.ip_protocol = 'tcp'
        # SecurityGroupId方开放的传输层协议相关的端口范围。取值范围。
        # TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        # ICMP协议：-1/-1。
        # GRE协议：-1/-1。
        # IpProtocol取值为all：-1/-1。
        # req.port_range = '80/443'
        req.port_range = port_range
        # 网卡类型。取值范围：
        # internet：公网网卡。
        # intranet：内网网卡。
        # req.nic_type = 'intranet'
        req.nic_type = nic_type
        # 设置访问权限。取值范围：
        # accept（默认）：接受访问。
        # drop：拒绝访问，不返回拒绝信息。
        req.policy = policy
        # 安全组规则优先级。取值范围：1~100。
        req.priority = proiority
        # 源端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。
        # 需要设置访问权限的源端安全组ID。至少设置一项SourceGroupId或者SourceCidrIp参数。
        # 如果指定了SourceGroupId没有指定参数SourceCidrIp，则参数NicType取值只能为intranet。
        # 如果同时指定了SourceGroupId和SourceCidrIp，则默认以SourceCidrIp为准。
        req.source_cidr_ip = source_cidr_ip
        try:
            client.authorize_security_group(req)
            ConsoleClient.log('--------------------入方向安全组新增成功--------------------')
        except Exception as error:
            ConsoleClient.log(error.message)

    @staticmethod
    async def authorize_security_group_async(
            client: ECSClient,
            security_group_id: str,
            region_id: str,
            port_range: str,
            nic_type: str,
            policy: str,
            proiority: str,
            source_cidr_ip: str,
    ) -> None:
        req = ecs_models.AuthorizeSecurityGroupRequest()
        # 目标安全组地域ID。
        req.region_id = region_id
        # 目标安全组ID。
        req.security_group_id = security_group_id
        # 传输层协议。取值大小写敏感。取值范围：tcp udp icmp gre all：支持所有协议。
        req.ip_protocol = 'tcp'
        # SecurityGroupId方开放的传输层协议相关的端口范围。取值范围。
        # TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
        # ICMP协议：-1/-1。
        # GRE协议：-1/-1。
        # IpProtocol取值为all：-1/-1。
        req.port_range = '80/443'
        # 网卡类型。取值范围：
        # internet：公网网卡。
        # intranet：内网网卡。
        req.nic_type = 'intranet'
        # 设置访问权限。取值范围：
        # accept（默认）：接受访问。
        # drop：拒绝访问，不返回拒绝信息。
        req.policy = 'drop'
        # 安全组规则优先级。取值范围：1~100。
        req.priority = '1'
        # 源端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。
        # 需要设置访问权限的源端安全组ID。至少设置一项SourceGroupId或者SourceCidrIp参数。
        # 如果指定了SourceGroupId没有指定参数SourceCidrIp，则参数NicType取值只能为intranet。
        # 如果同时指定了SourceGroupId和SourceCidrIp，则默认以SourceCidrIp为准。
        req.source_cidr_ip = '192.168.1.3'
        try:
            await client.authorize_security_group_async(req)
            ConsoleClient.log('--------------------入方向安全组新增成功--------------------')
        except Exception as error:
            ConsoleClient.log(error.message)

    @staticmethod
    def main(
            args: List[str],
    ) -> None:
        region_id = args[0]
        client = Sample.initialization(region_id)
        group_id = args[1]
        port_range = args[2]
        nic_type = args[3]
        policy = args[4]
        proiority = args[5]
        source_cidr_ip = args[6]
        # 修改安全组入方向规则
        Sample.authorize_security_group(client, group_id, region_id, port_range, policy, nic_type, proiority,
                                        source_cidr_ip)
        # 查询安全组的详情
        security_group_res = Sample.describe_security_group_attribute(client, group_id, region_id)
        detail = security_group_res.body
        ConsoleClient.log(f' 安全组 {detail.security_group_name}({detail.security_group_id}) 规则如下：')
        for permission in detail.permissions.permission:
            ConsoleClient.log(f'   规则描述： {permission.description};')
            ConsoleClient.log(f'   方向： {permission.direction};')
            ConsoleClient.log(f'   端口范围： {permission.source_port_range};')
            ConsoleClient.log(f'   源端IPv4 CIDR地址段： {permission.source_cidr_ip};')
            ConsoleClient.log(f'   网卡类型： {permission.nic_type};')
            ConsoleClient.log(f'   访问权限： {permission.policy};')
            ConsoleClient.log(f'   规则优先级： {permission.priority};')
            ConsoleClient.log(f'   创建时间： {permission.create_time};')

    @staticmethod
    async def main_async(
            args: List[str],
    ) -> None:
        region_id = args[0]
        client = Sample.initialization(region_id)
        group_id = args[1]
        port_range = args[2]
        nic_type = args[3]
        policy = args[4]
        proiority = args[5]
        source_cidr_ip = args[6]
        # 修改安全组入方向规则
        await Sample.authorize_security_group_async(client, group_id, region_id, port_range, policy, nic_type,
                                                    proiority, source_cidr_ip)
        # 查询安全组的详情
        security_group_res = await Sample.describe_security_group_attribute_async(client, group_id, region_id)
        detail = security_group_res.body
        ConsoleClient.log(f' 安全组 {detail.security_group_name}({detail.security_group_id}) 规则如下：')
        for permission in detail.permissions.permission:
            ConsoleClient.log(f'   规则描述： {permission.description};')
            ConsoleClient.log(f'   方向： {permission.direction};')
            ConsoleClient.log(f'   端口范围： {permission.source_port_range};')
            ConsoleClient.log(f'   源端IPv4 CIDR地址段： {permission.source_cidr_ip};')
            ConsoleClient.log(f'   网卡类型： {permission.nic_type};')
            ConsoleClient.log(f'   访问权限： {permission.policy};')
            ConsoleClient.log(f'   规则优先级： {permission.priority};')
            ConsoleClient.log(f'   创建时间： {permission.create_time};')


if __name__ == '__main__':
    Sample.main(['cn-hangzhou',
                 'sg-bp18qji31i7341eph4nq',
                 '80/443',
                 'drop',
                 'intranet',
                 '1',
                 '192.168.1.13'])
