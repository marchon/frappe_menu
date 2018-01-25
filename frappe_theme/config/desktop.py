# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"module_name": "frappe_theme",
			"color": "grey",
			"icon": "octicon octicon-file-directory",
			"type": "module",
			"label": _("frappe_theme")
		}
	]
