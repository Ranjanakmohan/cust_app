# Copyright (c) 2022, momscode and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
class Parent(Document):
	def validate(self):
		exists=frappe.db.exists('Parent','')
		if exists:
			frappe.msgprint('already exists in this documents')
	
