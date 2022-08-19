var m_played = false;
var isRotationNeeded = false;
var pickedObject;
var mouseX, mouseY;
var currentObj;
var currentAudioID;
var currentSubstepIdInfo;
var publishOptions;
var soloInteractivity = null;
var soloInteractivityProjectMetadata = null;
var currentTab = "tab0";
var modeArray = ["Preview", "Job"];
var procedureStepsArray = [];
var taskId = null;
var lastStep = null;
var procedureDuration = 0;
var jobCompleted = false;
var jobModeFinishedSteps = [];
var finishedStep = null;
var currentMode = modeArray[0];
var signOffButtonClicked = false;
var isBlocked = true;
var holder = document.getElementById('procedure-holder');
var typeMessage = ["NOTE", "CAUTION", "WARNING"];
var isPanelOpen = false;
var openEvent = false;
var max_range_value = 0;
var procedureDiv = document.getElementById('procedure');
var publishOptions;
var tabObject = {
    "tab0": "#tabPreContent",
    "tab1": "#tabBOMContent",
    "tab2": "#tabEquimentContent",
    "tab3": "#tabSuppliersContent",
    "tab4": "#tabInstructionsContent",
    "tab5": "#tabDocumentContent"
};
var canvas = $('canvas');
var pickedObject;
var prevPickedObject = null;
var mouseX, mouseY;//Pyda 20180226
var allSupplys = [];
var allEquipments = [];
var allParts = []
var allBom = [];
var docItems = [];

function docObject() {
    this.parent = "";
    this.ind = 0;
    this.node = "";
    this.docID = "";
    this.description = "";
}

var currentTorqueTool = "";
var currentParentStep = "";
var debugVar;

var attributeIds = [];
var operatorValue = "";

var g_simulation_filtered_action_Ids;

var g_procedure;

var clickedPart = [];
var hoveredPart = [];

// var titleData;
// var sectionData;
// var docNoData;
// var partNoData;
// var operationData;
// var modelData;
// var modelYearData;
// var engineData;
// var transmissionData;
// var lhdRhdData;
// var bodyData;
// var regionData;
// var revisionDateData;
// var createdDateData;
// var revisionData;
// var vinFromData;
// var vinToData;

// For Canvas
const canvasWidth = $("canvas").innerWidth();
const canvasHeight = $("canvas").innerHeight();
