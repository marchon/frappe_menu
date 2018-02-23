# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
# License: GNU General Public License v3. See license.txt

from __future__ import unicode_literals
import frappe

no_cache = 1
no_sitemap = 1

def get_context(context):
	# homepage = frappe.db.sql("select * from `tabQuestions`")
	questions = frappe.db.get_all('Questions', fields=['name','question_type'],limit_page_length=100)
	# questions = frappe.db.sql("select * from `tabQuestions`")
	# print(questions)
	for item in questions:
		# questionOptions = frappe.db.get_al		l('Answers', fields=['options','is_correct'],filters={'parent':item.name},limit_page_length=100)
		# if questionOptions:
			item.options = frappe.db.get_all('Answers', fields=['options','is_correct'],filters={'parent':item.name},limit_page_length=100)
	context.questions = questions
