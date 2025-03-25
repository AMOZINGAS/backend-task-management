const { EntitySchema } = require("typeorm");

module.export = new List({

    name: "List",
    tableName: "list",
    columns: {
        id: {
            type: "int",
            primary: true,
            generated: true,
        },
        name: {

            type: "varchar",
            length: 100,

        },
        color: {
            type: "varchar",
            length: 6,
        },


    }

});