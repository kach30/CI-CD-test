Ext.define('Admin.view.search.ResultsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchresults',

    editUser: function (gridView, rowIndex, colIndex) {
        var rec = gridView.getStore().getAt(rowIndex);
        alert("Edit1 " + rec.get('fullname'));
        var plugin = gridView.up('gridpanel').getPlugin('userRowEditorPlugin');
        plugin.startEdit(rec);
    }
    // TODO - Add control logic or remove is not needed
});
