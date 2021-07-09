/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    value: ComponentFramework.PropertyTypes.StringProperty;
    intersectEntityName: ComponentFramework.PropertyTypes.StringProperty;
    intersectEntityMainEntityLookupAttribute: ComponentFramework.PropertyTypes.StringProperty;
    intersectEntityRelatedEntityLookupAttribute: ComponentFramework.PropertyTypes.StringProperty;
    linkedEntityName: ComponentFramework.PropertyTypes.StringProperty;
    nameAttribute: ComponentFramework.PropertyTypes.StringProperty;
    idAttribute: ComponentFramework.PropertyTypes.StringProperty;
    relationshipName: ComponentFramework.PropertyTypes.StringProperty;
    relationshipEntity: ComponentFramework.PropertyTypes.StringProperty;
    linkedEntityFetchXmlResource: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    value?: string;
}
