# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "frappe_theme"
app_title = "frappe_theme"
app_publisher = "Noor"
app_description = "frappe_theme description"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "noor@valiantsystems.com"
app_license = "MIT"

app_include_css = [
    "/assets/frappe_theme/css/bdtheme.css",
    "/assets/frappe_theme/css/skin-blue.css",
    "/assets/frappe_theme/css/custom.css",
    "/assets/frappe_theme/css/temp.css",
]
app_include_js = [
    "/assets/frappe_theme/js/bdtheme.js",
    "/assets/frappe_theme/js/custom.js",
    "/assets/js/bdtheme-template.min.js",
]

# include js, css files in header of web template
web_include_css = "/assets/frappe_theme/css/bdtheme-web.css"
# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/frappe_theme/css/frappe_theme.css"
# app_include_js = "/assets/frappe_theme/js/frappe_theme.js"

# include js, css files in header of web template
# web_include_css = "/assets/frappe_theme/css/frappe_theme.css"
# web_include_js = "/assets/frappe_theme/js/frappe_theme.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "frappe_theme.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "frappe_theme.install.before_install"
# after_install = "frappe_theme.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "frappe_theme.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"frappe_theme.tasks.all"
# 	],
# 	"daily": [
# 		"frappe_theme.tasks.daily"
# 	],
# 	"hourly": [
# 		"frappe_theme.tasks.hourly"
# 	],
# 	"weekly": [
# 		"frappe_theme.tasks.weekly"
# 	]
# 	"monthly": [
# 		"frappe_theme.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "frappe_theme.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "frappe_theme.event.get_events"
# }

