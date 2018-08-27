#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import json
import cgi
import cgitb
from tptc import tokyo_public_traffic_challenger as tptc

cgitb.enable()

form = cgi.FieldStorage()
access_token = ""
challenger = tptc(access_token)

print("Content-Type: application/json")

print("\n")
print("\n")


json_data = json.loads(form.value)
datatype = json_data["datatype"]
params = json_data["params"]
result = challenger.get_tptc_api(datatype, params)

#print(json.dumps(params))
#print(json.dumps(json_data))
print(json.dumps(result))



print("\n")

