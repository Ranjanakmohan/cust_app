// Copyright (c) 2022, momscode and contributors
// For license information, please see license.txt

frappe.ui.form.on('School', {
	refresh: function(frm) {
		 frm.add_custom_button('Count',()=>{
			 frm.trigger('count')
			 
		 })

	} ,
	count:function(frm){
		let c=frappe.db.count('student details')
		frappe.msgprint('count is'+c)
	}
	
	
});
