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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,146,81,107,219,48,16,199,223,11,253,14,135,217,131,13,65,180,175,235,86,104,178,108,20,202,54,106,167,47,163,15,138,124,113,53,100,201,232,228,116,217,232,119,223,201,114,150,52,201,160,247,98,235,244,191,159,238,127,156,149,45,82,39,21,66,133,222,75,114,171,32,102,206,174,116,211,123,25,180,179,231,103,127,206,207,128,163,39,109,27,40,55,20,176,189,218,79,237,23,182,173,179,255,189,244,40,230,54,232,160,145,222,162,17,243,53,218,176,149,254,24,210,155,33,119,167,185,9,139,62,47,213,19,182,242,43,123,128,143,144,45,200,223,163,52,97,147,21,143,169,168,235,151,70,43,80,70,18,65,186,59,129,129,247,48,149,132,39,110,18,101,28,192,30,208,173,185,101,93,35,172,157,174,225,155,45,229,154,141,228,110,249,19,85,0,66,91,163,159,64,2,78,113,197,174,6,236,141,111,8,176,216,225,246,200,49,150,220,133,248,71,219,98,176,184,122,45,75,92,240,131,31,54,158,167,68,145,10,14,196,53,42,221,74,3,157,215,42,78,41,85,137,47,24,170,77,135,245,204,153,190,181,15,210,244,248,97,148,94,231,113,146,223,163,126,81,126,202,14,95,215,43,200,19,236,26,46,47,182,81,188,22,29,24,139,129,226,150,102,210,42,52,88,115,31,193,247,200,228,99,29,5,31,151,130,215,146,100,131,21,182,157,145,33,118,110,241,25,238,156,146,70,255,150,75,131,229,160,203,71,63,11,66,207,123,107,121,254,188,180,226,30,201,245,94,177,200,121,166,76,78,61,20,99,183,51,105,217,178,9,100,71,111,144,24,230,115,75,149,115,83,221,164,83,86,136,202,141,61,20,111,48,194,6,82,66,124,118,190,149,33,63,48,200,15,95,138,139,233,187,236,52,44,60,121,247,60,140,96,254,75,97,23,77,110,9,199,5,47,187,227,248,203,159,151,191,134,149,70,221,235,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
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

