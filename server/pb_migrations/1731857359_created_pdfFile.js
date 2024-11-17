/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zickivffsnbjidf",
    "created": "2024-11-17 15:29:19.159Z",
    "updated": "2024-11-17 15:29:19.159Z",
    "name": "pdfFile",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7td9we4a",
        "name": "field",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zickivffsnbjidf");

  return dao.deleteCollection(collection);
})
