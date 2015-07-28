# -*- coding: utf-8 -*-
# Copyright (c) 2015, Nishta and contributors
# For license information, please see license.txt
from __future__ import unicode_literals
import frappe
from frappe.utils import getdate, validate_email_add, today

@frappe.whitelist()
def bugs():
	test=[]
	select_project_name=frappe.db.sql("select * from `tabBug_Project`")
	for project_names in select_project_name:
		project=project_names[1];		
        test.append({project})    	
	return test
