define("UsrRealty_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "00645746-1e5c-4538-a3df-671e392af98e",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_e89ziy5_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "process-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceUSD_uaeseig",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceUSD_uaeseig"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_dx8a5aa",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_dx8a5aa"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrComissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrComissionUSD_7ko03pd",
					"labelPosition": "auto",
					"control": "$PDS_UsrComissionUSD_7ko03pd",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_7b8tlpt",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_7b8tlpt",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_khtvyix",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_khtvyix",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_lqp3qyw",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lqp3qyw_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_emwcdcs",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_emwcdcs",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_s1in6ug",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_s1in6ug_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrOfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_nnhct7l",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_nnhct7l",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_d19b0vw",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_d19b0vw",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_vvosrpf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_vvosrpf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_sbuo9bp",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_sbuo9bp_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_rtuct0m",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_sbuo9bp",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_rio8qcy",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_rtuct0m",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_xy65g5a",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_xy65g5a_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrPrentRealty",
									"value": "$UsrPrentRealty"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_rio8qcy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_wez5ji7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_wez5ji7_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_8o8cjzbDS"
						}
					}
				},
				"parentName": "FlexContainer_rio8qcy",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_p9pwteg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_p9pwteg_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_rio8qcy",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_pvkco6y",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_pvkco6y_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_p9pwteg",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_5q0si3c",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_5q0si3c_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_p9pwteg",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_kk723aq",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_kk723aq_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_8o8cjzb"
					]
				},
				"parentName": "FlexContainer_rio8qcy",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_x7vdc16",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_sbuo9bp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_8o8cjzb",
					"activeRow": "$GridDetail_8o8cjzb_ActiveRow",
					"selectionState": "$GridDetail_8o8cjzb_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_8o8cjzb_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_8o8cjzbDS_Id",
					"columns": [
						{
							"id": "44108689-0571-6a31-863c-6e6fc8cd62d0",
							"code": "GridDetail_8o8cjzbDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_8o8cjzbDS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 179
						},
						{
							"id": "eaa5a52b-2b2a-02f1-22b9-f35b27b08d96",
							"code": "GridDetail_8o8cjzbDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_8o8cjzbDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 176
						},
						{
							"id": "dbf0af75-d2d6-15f7-8c66-137bbbc59f0f",
							"code": "GridDetail_8o8cjzbDS_UsrManager",
							"caption": "#ResourceString(GridDetail_8o8cjzbDS_UsrManager)#",
							"dataValueType": 10,
							"width": 119
						},
						{
							"id": "7f89e9c0-fd9d-3d0e-2647-734696a2918e",
							"code": "GridDetail_8o8cjzbDS_UsrComment",
							"caption": "#ResourceString(GridDetail_8o8cjzbDS_UsrComment)#",
							"dataValueType": 28,
							"width": 130
						},
						{
							"id": "69c7b948-8859-76da-ca21-1e02964c9c10",
							"code": "GridDetail_8o8cjzbDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_8o8cjzbDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 131
						},
						{
							"id": "5feaebc0-fc29-f173-b82f-c90c1913ed4c",
							"code": "GridDetail_8o8cjzbDS_UsrPrentRealty",
							"caption": "#ResourceString(GridDetail_8o8cjzbDS_UsrPrentRealty)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_x7vdc16",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8o8cjzb_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_8o8cjzbDS",
							"filters": "$GridDetail_8o8cjzb | crt.ToCollectionFilters : 'GridDetail_8o8cjzb' : $GridDetail_8o8cjzb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8o8cjzb_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8o8cjzb_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_8o8cjzbDS",
							"filters": "$GridDetail_8o8cjzb | crt.ToCollectionFilters : 'GridDetail_8o8cjzb' : $GridDetail_8o8cjzb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8o8cjzb_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_8o8cjzb_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8o8cjzb_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_8o8cjzb | crt.ToCollectionFilters : 'GridDetail_8o8cjzb' : $GridDetail_8o8cjzb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8o8cjzb_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_8o8cjzb_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_8o8cjzbDS",
							"filters": "$GridDetail_8o8cjzb | crt.ToCollectionFilters : 'GridDetail_8o8cjzb' : $GridDetail_8o8cjzb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_8o8cjzb_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceUSD_uaeseig": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_dx8a5aa": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrOfferType_emwcdcs": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrType_khtvyix": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrComment_nnhct7l": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_d19b0vw": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrNumber_7b8tlpt": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrComissionUSD_7ko03pd": {
						"modelConfig": {
							"path": "PDS.UsrComissionUSD"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"GridDetail_8o8cjzb": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_8o8cjzbDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_8o8cjzbDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_8o8cjzbDS.UsrVisitDateTime"
									}
								},
								"GridDetail_8o8cjzbDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_8o8cjzbDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_8o8cjzbDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_8o8cjzbDS.UsrManager"
									}
								},
								"GridDetail_8o8cjzbDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_8o8cjzbDS.UsrComment"
									}
								},
								"GridDetail_8o8cjzbDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_8o8cjzbDS.CreatedOn"
									}
								},
								"GridDetail_8o8cjzbDS_UsrPrentRealty": {
									"modelConfig": {
										"path": "GridDetail_8o8cjzbDS.UsrPrentRealty"
									}
								},
								"GridDetail_8o8cjzbDS_Id": {
									"modelConfig": {
										"path": "GridDetail_8o8cjzbDS.Id"
									}
								}
							}
						}
					},
					"UsrPrentRealty": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_8o8cjzbDS": [
							{
								"attributePath": "UsrPrentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_8o8cjzbDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrPrentRealty": {
									"path": "UsrPrentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          			{

				request: "usr.PushButtonRequest",

				/* Implementation of the custom query handler. */

				handler: async (request, next) => {

					this.console.log("Button works...");

					Terrasoft.showInformation("My button was pressed.");

					var price1 = await request.$context.PDS_UsrPriceUSD_uaeseig;
                    var price2 = await request.$context.getAttributeNameByViewItemName("UsrPriceUSD");

					this.console.log("Price1 = " + price1);
                    this.console.log("Price2 = " + price2);

					request.$context.PDS_UsrPriceUSD_uaeseig= price1 * 0.2;

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}

			},
          {
            				request: "crt.HandleViewModelAttributeChangeRequest",

				/* The custom implementation of the system query handler. */

				handler: async (request, next) => {

					if (request.attributeName === 'PDS_UsrPriceUSD_uaeseig' || 				// if price changed

					   request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) { 		// or percent changed

						var price = await request.$context.PDS_UsrPriceUSD_uaeseig;

						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;

						var commission = price * percent / 100;

						request.$context.PDS_UsrComissionUSD_7ko03pd = commission;

					}

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}
          }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          			/* The validator type must contain a vendor prefix.

			Format the validator type in PascalCase. */

			"usr.DGValidator": {

				validator: function (config) {

					return function (control) {

						let value = control.value;

						let minValue = config.minValue;

						let valueIsCorrect = value >= minValue;

						var result;

						if (valueIsCorrect) {

							result = null;

						} else {

							result = {

								"usr.DGValidator": { 

									message: config.message

								}

							};

						}

						return result;

					};

				},

				params: [

					{

						name: "minValue"

					},

					{

						name: "message"

					}

				],

				async: false
              }
        }/**SCHEMA_VALIDATORS*/
	};
});