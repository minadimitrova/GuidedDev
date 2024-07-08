namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrRealtyEventsSchema

	/// <exclude/>
	public class UsrRealtyEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrRealtyEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrRealtyEventsSchema(UsrRealtyEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("383d8c88-c430-4e78-b300-fe7cf988730e");
			Name = "UsrRealtyEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("3954a102-36bb-442d-b84c-648395edb7d8");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,83,65,111,155,48,20,190,71,234,127,176,208,14,88,138,172,246,186,110,149,74,150,77,145,186,118,42,164,151,105,7,199,60,168,39,99,35,219,164,99,85,254,251,12,38,11,1,154,229,178,119,1,158,191,247,249,125,239,123,72,90,128,41,41,3,148,128,214,212,168,204,146,133,146,25,207,43,77,45,87,242,98,246,122,49,67,46,42,195,101,142,226,218,88,40,174,251,169,126,97,81,40,249,230,161,6,178,148,150,91,14,230,28,12,89,110,65,218,61,244,123,155,174,219,220,29,119,77,72,208,97,204,158,161,160,247,78,3,250,136,130,181,209,143,64,133,173,3,252,195,23,149,213,70,112,134,152,160,198,32,127,54,65,131,222,163,136,26,152,56,241,44,221,0,122,132,106,235,90,230,41,160,173,226,41,122,144,49,221,58,33,161,218,252,4,102,145,1,153,130,158,35,79,24,65,230,84,181,180,183,58,55,8,240,129,174,199,220,196,198,117,65,254,178,237,105,0,95,31,195,60,47,210,173,30,39,60,244,9,236,11,6,224,20,24,47,168,64,165,230,172,153,146,175,34,95,192,38,117,9,233,66,137,170,144,79,84,84,240,161,131,222,132,205,36,191,53,248,117,252,41,24,222,206,51,20,122,178,27,116,117,185,15,124,12,26,8,107,2,200,202,44,168,100,32,32,117,125,88,93,129,99,30,227,140,213,205,82,184,181,52,52,135,4,138,82,80,219,116,46,225,5,221,41,70,5,255,77,55,2,226,22,23,118,122,214,6,180,219,91,233,230,239,150,150,60,130,81,149,102,14,164,180,99,153,79,93,212,196,97,103,252,178,5,115,20,140,238,48,164,157,207,202,36,74,69,60,247,95,1,38,137,234,122,192,103,8,113,2,124,130,124,86,186,160,54,28,8,116,23,95,145,203,232,93,48,77,102,159,181,122,105,71,176,252,197,160,108,68,238,25,198,5,187,222,23,207,142,221,194,175,3,55,195,174,173,149,185,175,132,120,208,203,162,180,117,120,98,77,60,222,111,73,243,199,187,185,5,24,15,120,167,253,158,13,48,255,197,235,209,236,206,52,185,211,242,181,50,54,130,219,52,157,242,249,100,255,255,180,56,8,70,12,39,125,125,211,212,195,251,206,59,239,30,187,63,52,231,22,78,203,5,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
			LocalizableStrings.Add(CreateCommentMustBeAddLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("90fd0317-41ef-1fe7-061b-ef5114d3342e"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("3954a102-36bb-442d-b84c-648395edb7d8"),
				CreatedInSchemaUId = new Guid("383d8c88-c430-4e78-b300-fe7cf988730e"),
				ModifiedInSchemaUId = new Guid("383d8c88-c430-4e78-b300-fe7cf988730e")
			};
			return localizableString;
		}

		protected virtual SchemaLocalizableString CreateCommentMustBeAddLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("96cd5cb1-3cdf-4c52-9677-a0b76945f461"),
				Name = "CommentMustBeAdd",
				CreatedInPackageId = new Guid("3954a102-36bb-442d-b84c-648395edb7d8"),
				CreatedInSchemaUId = new Guid("383d8c88-c430-4e78-b300-fe7cf988730e"),
				ModifiedInSchemaUId = new Guid("383d8c88-c430-4e78-b300-fe7cf988730e")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("383d8c88-c430-4e78-b300-fe7cf988730e"));
		}

		#endregion

	}

	#endregion

}

