# -*- coding: utf-8 -*-
"""
@File    : 获取某个包里面的所有模块.py
@Time    : 5/5/2023 9:04 PM
@Author  : king
@Desc    : 
"""

import pkgutil

package_name = 'requests'
package = __import__(package_name)

# 列出 package 包中的所有模块
for importer, modname, ispkg in pkgutil.iter_modules(package.__path__):
    print(modname)