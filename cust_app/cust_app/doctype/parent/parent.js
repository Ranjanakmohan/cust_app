// Copyright (c) 2022, momscode and contributors
// For license information, please see license.txt

frappe.ui.form.on('Parent', {
	refresh:function(frm){
		frm.add_custom_button('count',()=>{
			let c=frappe.db.count('Parent') 
			frappe.msgprint('the count is '+c)
			
		})
	}
	/* refresh: function(frm) {
		frm.add_custom_button('name',()=>{
			let a=prompt('enter first name',' ')
			frm.set_value('parent_name',a);
		})

	 } */
});
