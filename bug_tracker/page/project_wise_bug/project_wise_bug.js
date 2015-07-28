frappe.pages['project-wise-bug'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Project Wise Bug',
		single_column: true
	});
	frappe.call({
		method:"erpnext.bug_tracker.doctype.bug_project.bug_project.bugs",
		callback:function(data){
			//alert(data)
			page.main.append(frappe.render_template('project_wise_bug', {data:data.message}))
			//alert(data.message)
		}
	});
}
