function applyChangesUI() {
    if (publishOptions.Background3DColor) {//Setting background color from publish options.
        Cortona3DSolo.app.setDefaultBackgroundColors(publishOptions.Background3DColor);
    }
    if (publishOptions.HighlightedStepColor) {//Setting selected step background color from publish options.
        Cortona3DSolo.app.setDefaultBackgroundColors(publishOptions.Background3DColor);
    }
    if (publishOptions.ShowFreezeCheckbox && publishOptions.ShowFreezeCheckbox == "No") {
        $("#freeze-viewpoint").hide();
    }
    if (publishOptions.ShowFreezeCheckbox && publishOptions.ShowPrevNextButtons == "No") {
        $("#button-back").hide();
        $("#button-next").hide();
    }
    if (publishOptions.ShowFreezeCheckbox && publishOptions.ShowSmoothControl == "No") {
        $("#toolbar-range").hide();
    }
    if (publishOptions.ShowFreezeCheckbox && publishOptions.ShowSpeedSelection == "No") {
        $("#procedure-speed").hide();
    }

}

var currentTab = "tab0";

function changeTab(e) {
    console.log("enter tab");
    if (currentTab != e.id) {
        $("#" + currentTab).removeClass("htab");
        $(tabObject[currentTab]).addClass("no-display");
        $("#" + e.id).addClass("htab");
        $(tabObject[e.id]).removeClass("no-display");
        currentTab = e.id;

        window.setHeaderTabValue($(e).text());
        if (currentTab == "tab4") {
            if ($('.divStep.stepSelected').length > 0) {
                $("#currentTaskContent").html($('.divStep.stepSelected')[0].innerHTML);
                loadInstuctionsParts()
            }
        }
        if (currentTab == "tab5") {
            if ($('.divStep.stepSelected').length > 0) {
                $("#currentTaskContent").html($('.divStep.stepSelected')[0].innerHTML);
                loadInstuctionsParts()
            }
        }
    }

}

/*Cortona3D options*/

//Freeze Camera
function freezeCamera(check) {
    Cortona3DSolo.app.procedure.freezeCamera(check);
}

//Set Speeed Animation
function setSpeedAnimation(ratio) {
    Cortona3DSolo.app.procedure.setPlaybackSpeed(ratio);
}


/*Message box methods*/
var infoTest = null;

function openEventBox(id) {
    var eventObject = Cortona3DSolo.app.procedure.interactivity.getProcedureItemInfo(id);//Pyda 20180516
    var type = (eventObject.eventType == "WARNING" || eventObject.eventType == "CAUTION" || eventObject.eventType == "DANGER" || eventObject.eventType == "NOTICE" || eventObject.eventType == "NOTE") ? eventObject.eventType.toLowerCase() : "other";
    eventTypeName = type;
    addAlertTypeClass(type);
    addAlertTypeToCaption(eventObject.eventType, eventObject)
    addAlertContentToBody(eventObject.eventType, eventObject);//Pyda 20180516
    displayEventBox();
}

function addAlertTypeClass(type) {
    var typeObject = document.getElementById("alert-message-type");
    typeObject.className = "alert-message-type-" + type;
}

function addAlertTypeToCaption(type, obj) {
    if (eventTypeName != "other") {
        document.getElementById("alert-message-caption").innerHTML = type;
    } else {
        var eventobj = obj.description;
        document.getElementById("alert-message-caption").innerHTML = $("#" + eventobj).children()[0].innerHTML
    }

}

function addAlertContentToBody(type, id) {
    if (eventTypeName != "other") {
        var contentId = type.toLowerCase() + "_" + id.description;
        document.getElementById("alert-message-body").innerHTML = ($("#" + contentId).length == 0) ? id.description : document.getElementById(contentId).innerHTML;
    } else {
        var eventobj = id.description;
        document.getElementById("alert-message-body").innerHTML = $("#" + eventobj).children()[1].innerHTML
    }

}

function displayEventBox() {
    changeStyleEventBox();
    document.getElementById("eventBox").classList.remove('no-show');
    document.getElementById('button-playback').click();
    openEvent = true;
}

function changeStyleEventBox() {
    var sol = document.getElementById("solo-canvas-holder");
    var box = document.getElementById("eventBox");
    var ht = sol.offsetHeight - box.offsetHeight;
    box.style.top = ht / 2 + "px";
}

function closeEventBox() {
    openEvent = false;
    document.getElementById("eventBox").classList.add('no-show');
    document.getElementById('button-playback').click();
    unMaskContainer();
}

/*End of Message box methods*/

/*2D display methods*/

var holder = document.getElementById('procedure-holder');//Procedure-holder element


var isCanvasVisible = true;
var isSvgVisibile = false;

/*
Load2D functionlity
1.get title.
2.get src
3.check is panel open and remove panel(no expanded view of document)
4.pauseAnimation3D is called
5.hideCanvasHolder() is called
6.addContentToSVG method io called*/
function load2D(e) {
    console.log(e);
    var title = getSVGTitle(e);
    var src = e.attributes["data-src"].value;
    var close2D = false;
    // if (!isPanelOpen) removeNoPanel();
    pauseAnimation3D();
    // hideCanvasHolder();
    addContentToSVG(title, src, close2D);
    //window.set2DPopup(src, title);
}

var tempElement;

function getSVGTitle(e) {
    tempElement = e;
    var res = ($(tempElement).parent().parent().hasClass("fig")) ? $(tempElement).parent().parent().attr("data-title") : $(tempElement).attr("data-title");
    console.log(res);
    return res;
}

/*if animation played, pause animation*/
function pauseAnimation3D() {
    if (m_played && propInteractivityName !== "") {
        document.getElementById('button-playback').onclick;
    }
}

/*Hide canvasholder*/
function hideCanvasHolder() {
    isCanvasVisible = false;
    document.getElementById('solo-canvas-holder').classList.add('no-show');
}

function addContentToSVG(title, src, close2D) {
    //addTitleToSVG(title);

    // var svgVisibility = $("#SvgDrawing > div").is(":hidden");
    // console.log(svgVisibility);
    if (!close2D) {
        window.setDrawerOpen(title);
        console.log(src)
        loadSVG(src);
    } else {
        window.setDrawerClose();
    }


    //showSVGHolder();
    //showSVG();
}

function addTitleToSVG(title) {
    document.getElementById("app-figure-title").innerHTML = title;
}

function loadSVG(src) {
    Cortona3DSolo.app.drawing.load(src);
    Cortona3DSolo.app.drawing.show();
}

function showSVGHolder() {
    document.getElementById('solo-svg-holder').classList.remove('no-show');
}

function showSVG() {
    isSvgVisibile = true;
    Cortona3DSolo.app.drawing.show();
}


// function closeSVG() {
//     if (isPanelOpen) //addNoPanel();
//         hideSVG();
//     showCanvasHolder();
// }

function addNoPanel() {
    isPanelOpen = false;
    document.getElementsByClassName("container")[0].classList.add('no-panel');

}

function hideSVG() {
    document.getElementById("solo-svg-holder").children[1].style.visibility = "hidden";
    document.getElementById("solo-svg-holder").classList.add('no-show');
    isSvgVisibile = false;
}

function showCanvasHolder() {
    document.getElementById('solo-canvas-holder').classList.remove('no-show');
    isCanvasVisible = true;
}


/*Open right panel in container*/
function removeNoPanel() {
    isPanelOpen = true;
    document.getElementsByClassName("App")[0].classList.remove('no-panel');
}

// document.getElementById('button-close').onclick = function () {
//     closeSVG();
// };

/*remove selected class from div contents*/
function removeSelectedClass() {
    // Array.prototype.slice.call(holder.getElementsByClassName('stepSelected')).forEach(function (el) {
    //     el.classList.remove('stepSelected'); //Removing hilight
    // });
    $('.stepSelected').removeClass('stepSelected');
    $('.warning-flash').removeClass('warning-flash');
    $('.caution-flash').removeClass('caution-flash');
    $('.note-flash').removeClass('note-flash');
}


/*Close Cortona3D*/
$("#button-close-canvas").on("click", closePanel);

function closePanel() {
    if (isCanvasVisible) {
        hideCanvasHolder();
        removeSelectedClass()
        isCanvasVisible = true;
    }
    addNoPanel();
}

/*End of Close Cortona3D*/

/*Toolbar buttons*/

//Freeze Viewpoint
$('#vpfreeze').change(function () {
    freezeCamera(this.checked);
});

//Select Speed
$('#speed-selector').change(function () {
    setSpeedAnimation(this.value);
});

/*Help button Pyda 20170831*/
$("button.helpButton").on("click", function () {
    window.open(resFolder + "/" + language_spec + "/index.htm", "help window", 'width=800, height=600');
})

/*Page Load*/
$(document).ready(function () {
    if (publishOptions && publishOptions.HighlightedStepColor) {
        console.log("t");
    }
    //$("#previewMode").click();
    try {
        generateParsArray();
        assignMousePartFunctions();
        setPlayRangeToProcedure();
        loadInstructions();
    } catch (e) {
        console.log(e);
    }
});


var currentTab = "tab0";

/*Mouse functionalities to Parts*/
function fit3D(n) {
    eventClicked = true;
    if (!isBlocked) Cortona3DSolo.app.fitObjects(n);
}

function highlight3DObject(n) {
    //console.log("highlight");
    if (!isBlocked) {
        var objNodes = soloInteractivity.getObjectNamesByDocId(n);
        objNodes.forEach(function (i) {
            Cortona3DSolo.app.highlightObjects(i);
            // hovered_parts(i)
        })
    }
}

function removeHighlight3DObject() {
    //console.log("removeHighlight");
    if (!isBlocked) Cortona3DSolo.app.removeHighlightObjects();
    // if (!isBlocked) remove_hover_parts();
}

function assignMousePartFunctions() {
    $(".divPartRow").on("click", function (e) {
        var docID = $(this).attr("data-docid");
        var interactivity = Cortona3DSolo.app.procedure.interactivity;
        Cortona3DSolo.app.attnObjects(interactivity.getObjectNamesByDocId(docID));
    });

    $(".divPartRow").on("mouseenter", function (e) {

        //var node = $(this).attr("data-node");
        // if ($(this).hasClass('clickpartHighlight')) {//Pyda 20170818
        //     highlight3DObject(docID);
        // }else{
        // console.log("Entering")
        var docID = $(this).attr("data-docid");
        var objects = Cortona3DSolo.app.procedure.interactivity.getObjectNamesByDocId(docID);
        var handles = objects.map(function (def) {
            return Cortona3DSolo.app.getObjectWithName(def);
        });
        var isVisible = Cortona3DSolo.app.getObjectVisibility(handles);
        if (isVisible == 0) {
            $(this).addClass("partHighlight");
            highlight3DObject(docID);
        } else {
            $(this).addClass("partHighlightRed");
        }

        // }
    });

    $(".divPartRow").on("mouseleave", function (e) {
        var docID = $(this).attr("data-docid");
        // $(this).removeClass("partHighlight");
        $(this).removeClass("partHighlight");
        removeHighlight3DObject();
        // console.log("Leaving")
    });
}

//Loading Instructions
function loadInstructions() {
    if (finishedStep == null) {
        $("#currentTaskContent").html($("div.steps > div")[0].innerHTML);
    } else {
        if (jobCompleted) {
            $("#currentTaskContent").html($("#" + lastStepId)[0].innerHTML);
        } else {
            $("#currentTaskContent").html($("#" + finishedStep).next()[0].innerHTML);
        }

    }
    loadInstuctionsParts()
}

//Parts table
function loadInstuctionsParts() {

    waitForEl("#currentTaskPartsContent", function () {
        // $("#currentTaskPartsContent").html(" ");
        // $("#currentTaskSupplyContent").html(" ");
        // $("#currentTaskEquipmentContent").html(" ");
        // $("#currentTaskContent").html(" ");
        var obj = $("#currentTaskContent .doc-item");
        var partHTMLTable = $("<table></table>").addClass("treePart")
        var equipmentHTMLTable = $("<table></table>").addClass("treeEquipment")
        var supplyHTMLTable = $("<table></table>").addClass("treeSupply")
        var tempContent = '<colgroup><col width="10%"><col width="25%"><col width="55%"><col width="10%"></colgroup>'
        tempContent += '<thead><tr><td width="10%"><pre>Type</pre><td width="25%"><pre>Part Number</pre></td><td width="55%"><pre>Part Name</pre></td><td width="10%"><pre>Qty</pre></td></tr></thead>'
        tempContent += '<tbody>'
        var tempequipContent = '<colgroup><col width="10%"><col width="25%"><col width="55%"><col width="10%"></colgroup>'
        tempequipContent += '<thead><tr><td width="10%"><pre>Type</pre><td width="25%"><pre>Part Number</pre></td><td width="55%"><pre>Part Name</pre></td><td width="10%"><pre>Qty</pre></td></tr></thead>'
        tempequipContent += '<tbody>'
        var tempsupplyContent = '<colgroup><col width="10%"><col width="25%"><col width="55%"><col width="10%"></colgroup>'
        tempsupplyContent += '<thead><tr><td width="10%"><pre>Type</pre><td width="25%"><pre>Part Number</pre></td><td width="55%"><pre>Part Name</pre></td><td width="10%"><pre>Qty</pre></td></tr></thead>'
        tempsupplyContent += '<tbody>'
        if (obj.length) {
            var objIDArr = [];
            obj.each(function (k, v) {
                $(v).click(function () {
                    var interactivity = Cortona3DSolo.app.procedure.interactivity;
                    var docid = this.id;
                    Cortona3DSolo.app.attnObjects(interactivity.getObjectNamesByDocId(docid));
                })
                if (allSupplys.indexOf(v.id) != -1) {
                    // $("#currentTaskSupplyContent").append($($("div[data-docid='" + v.id + "']")[0]).clone());
                    if ($("div[data-docid='" + v.id + "'] > div:nth-child(1)")[0]) {
                        if (!objIDArr.contains(v.id)) {
                            if ($("div[data-docid='" + v.id + "'] > img").attr("src")) {
                                tempsupplyContent += "<tr onclick='show2DImage(this);return false;' class='divPartRow' data-src='" + $("div[data-docid='" + v.id + "'] > img").attr("src") + "' data-docid='" + v.id + "'>";
                            } else {
                                tempsupplyContent += "<tr data-docid=" + v.id + " class='divPartRow'>";
                            }
                            tempsupplyContent += "<td class='supply_type'>";
                            if ($("div[data-docid='" + v.id + "']").attr("data-type") == "2D") {
                                tempsupplyContent += "<img src='2d.png' alt='' title='2D'>";
                            } else {
                                tempsupplyContent += "<img src='3d.png' alt='' title='3D'>";
                            }
                            tempsupplyContent += "</img>";
                            tempsupplyContent += "</td>";
                            tempsupplyContent += "<td class='supply_partnumber'>";
                            tempsupplyContent += $("div[data-docid='" + v.id + "'] > div:nth-child(1)")[0].innerText.split(": ")[1]
                            tempsupplyContent += "</td>";
                            tempsupplyContent += "<td class='supply_partname'>";
                            tempsupplyContent += $("div[data-docid='" + v.id + "'] > div:nth-child(2)")[0].innerText.split(": ")[1]
                            tempsupplyContent += "</td>";
                            tempsupplyContent += "<td class='supply_quantity'>";
                            tempsupplyContent += $("div[data-docid='" + v.id + "'] > div:nth-child(3)")[0].innerText.split(": ")[1]
                            tempsupplyContent += "</td>";
                            tempsupplyContent += "</tr>";
                            objIDArr.push(v.id);
                        }
                    }
                } else if (allEquipments.indexOf(v.id) != -1) {
                    // $("#currentTaskEquipmentContent").append($($("div[data-docid='" + v.id + "']")[0]).clone());
                    if ($("div[data-docid='" + v.id + "'] > div:nth-child(1)")[0]) {
                        if (!objIDArr.contains(v.id)) {
                            if ($("div[data-docid='" + v.id + "'] > img").attr("src")) {
                                tempequipContent += "<tr onclick='show2DImage(this);return false;' class='divPartRow' data-src='" + $("div[data-docid='" + v.id + "'] > img").attr("src") + "' data-docid='" + v.id + "'>";
                            } else {
                                tempequipContent += "<tr data-docid=" + v.id + " class='divPartRow'>";
                            }
                            tempequipContent += "<td class='equip_type'>";
                            if ($("div[data-docid='" + v.id + "']").attr("data-type") == "2D") {
                                tempequipContent += "<img src='2d.png' alt='' title='2D'>";
                            } else {
                                tempequipContent += "<img src='3d.png' alt='' title='3D'>";
                            }
                            tempequipContent += "</img>";
                            tempequipContent += "</td>";
                            tempequipContent += "<td class='equip_partnumber'>";
                            tempequipContent += $("div[data-docid='" + v.id + "'] > div:nth-child(1)")[0].innerText.split(": ")[1]
                            tempequipContent += "</td>";
                            tempequipContent += "<td class='equip_partname'>";
                            tempequipContent += $("div[data-docid='" + v.id + "'] > div:nth-child(2)")[0].innerText.split(": ")[1]
                            tempequipContent += "</td>";
                            tempequipContent += "<td class='equip_quantity'>";
                            tempequipContent += $("div[data-docid='" + v.id + "'] > div:nth-child(3)")[0].innerText.split(": ")[1]
                            tempequipContent += "</td>";
                            tempequipContent += "</tr>";
                            objIDArr.push(v.id);
                        }
                    }
                } else {
                    // console.log("Instruction Part")
                    // console.log(v.id)
                    if ($("div[data-docid='" + v.id + "'] > div:nth-child(1)")[0]) {
                        if (!objIDArr.contains(v.id)) {
                            if ($("div[data-docid='" + v.id + "'] > img").attr("src")) {
                                tempContent += "<tr onclick='show2DImage(this);return false;' class='divPartRow' data-src='" + $("div[data-docid='" + v.id + "'] > img").attr("src") + "' data-docid='" + v.id + "'>";
                            } else {
                                tempContent += "<tr data-docid=" + v.id + " class='divPartRow'>";
                            }
                            tempContent += "<td class='bom_type bompart'>";
                            if ($("div[data-docid='" + v.id + "']").attr("data-type") == "2D") {
                                tempContent += "<img src='2d.png' alt='' title='2D'>";
                            } else {
                                tempContent += "<img src='3d.png' alt='' title='3D'>";
                            }
                            tempContent += "</img>";
                            tempContent += "</td>";
                            tempContent += "<td class='bom_partnumber bompart'>";
                            tempContent += $("div[data-docid='" + v.id + "'] > div:nth-child(1)")[0].innerText.split(": ")[1]
                            tempContent += "</td>";
                            tempContent += "<td class='bom_partname bompart'>";
                            tempContent += $("div[data-docid='" + v.id + "'] > div:nth-child(2)")[0].innerText.split(": ")[1]
                            tempContent += "</td>";
                            tempContent += "<td class='bom_quantity bompart'>";
                            tempContent += $("div[data-docid='" + v.id + "'] > div:nth-child(3)")[0].innerText.split(": ")[1]
                            tempContent += "</td>";
                            tempContent += "</tr>";
                            objIDArr.push(v.id);
                            // $("#currentTaskPartsContent").append($($("div[data-docid='" + v.id + "']")[0]).clone());
                        }
                    }
                }
            })
        }

        tempContent += "</tbody>";
        tempequipContent += "</tbody>";
        tempsupplyContent += "</tbody>";
        partHTMLTable.append(tempContent);
        equipmentHTMLTable.append(tempequipContent);
        supplyHTMLTable.append(tempsupplyContent);
        // $('#currentTaskPartsContent').append(partHTMLTable);
        // $('#currentTaskEquipmentContent').append(equipmentHTMLTable);
        // $('#currentTaskSupplyContent').append(supplyHTMLTable);
        assignMousePartFunctions();
    });
}

/*Click on SignOff button*/
// $("#button-signoff").on("click", function () {
//     //alert("Sign Off clicked");
//     signOffButtonClicked = true;
//     if ($('.divStep.stepSelected').find("p.signOffText").length != 0) {
//         $('.divStep.stepSelected p.signOffText').remove();
//     }
//     var signOffText = getSignOffTime();
//     $('.divStep.stepSelected').prepend("<p class='signOffText'>" + signOffText + "</p>");
//     $("#button-next").click();
// })

function getSignOffTime() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    month = month.toString();
    var year = date.getFullYear();
    if (month.length == 1) {
        month = "0" + month;
    }
    var dateFormat = day + "/" + month + "/" + year;
    var hours = date.getHours().toString();
    var min = date.getMinutes().toString();
    var sec = date.getSeconds().toString();
    if (hours.length == 1) {
        hours = "0" + hours;
    }
    if (min.length == 1) {
        min = "0" + min;
    }
    if (sec.length == 1) {
        sec = "0" + sec;
    }
    var time = hours + ":" + min + ":" + sec;
    var resultText = "SignOff: " + dateFormat + ", " + time;
    return [resultText, dateFormat, time];
}

function generateParsArray() {
    getAllParts();
    getAllSupplys();
    getAllEquipments();
}

var indentList = [];
var treeObject = {};
var treeHTMLTable;
var treeHTMLSupplyTable;
var treeHTMLTableDocTab;
var treeHTMLSupplyTableDocTab;
var docItemParentList = [];
var docItemParentObjectList = {};
var tempContent = "";
var tempContentSupply = "";
var table = "";

function getAllSupplys() {
    //var tempArr = [];
    var tempObj;
    treeObject[0] = [];
    $("#divSupplyList .divPart").each(function (i, v) {
        tempObj = new docObject();
        var docID = $(v).attr("data-docid");
        // var ind = parseInt($(v).attr("data-ind"));
        var ind = 0;
        var node = $(v).attr("data-node");
        node = node.split(",")[0];
        // var parent = $(v).attr("data-parent");
        var parent = "";
        if (parent.length > 0) {
            parent = $("div[data-docid='" + parent + "']").attr("data-node");
            parent = parent.split(",")[0];
        }
        tempObj.node = node;
        tempObj.ind = ind
        tempObj.parent = parent;
        tempObj.docID = docID;
        docItems.push(tempObj);
        //console.log($(v).attr("data-node"));
        if (indentList.indexOf(ind) == -1) {
            indentList.push(ind);
            treeObject[ind] = [];
            treeObject[0].push(tempObj);
        } else {
            try {
                treeObject[0].push(tempObj);
            } catch (err) {
                console.log("SOmehting fishy")
                console.log(err)
            }
        }
        if (parent.length > 0 && docItemParentList.indexOf(parent) == -1) {
            docItemParentList.push(parent);
            docItemParentObjectList[parent] = [];
            docItemParentObjectList[parent].push(tempObj);
        } else if (parent.length > 0 && docItemParentList.indexOf(parent) != -1) {
            docItemParentObjectList[parent].push(tempObj);
        }
        allSupplys.push(docID);
        allBom.push(node);
    });
    Object.keys(treeObject).forEach(function (i) {
        if (i == 0) {
            createHTMLTable(treeObject[i], '', '#divSupplyList');
            $('#divContainerSupply').append(treeHTMLSupplyTable);
            $('#AccordianTaskSupplyContent').append(treeHTMLSupplyTableDocTab);
        } else {
            Object.keys(docItemParentObjectList).forEach(function (k) {
                if (docItemParentObjectList[k].length > 0 && docItemParentObjectList[k][0].ind == i) {
                    createHTMLTable(docItemParentObjectList[k], '', '');
                    $("#bch" + getObjectIDFromNode(k) + " td.bomchildren").append(treeHTMLSupplyTable);
                    $("#bch" + getObjectIDFromNode(k) + " td.bomchildren").append(treeHTMLSupplyTableDocTab);
                }
            })
        }

        //allSupplys.push(tempArr);
        //tempArr = [];
    });


    //Included Procedure Parts
    if (isTCPublish) {
        var tempObj;
        treeObject[0] = [];
        $("#divIncludedSupplyList .divPart").each(function (i, v) {
            tempObj = new docObject();
            var docID = $(v).attr("data-docid");
            // var ind = parseInt($(v).attr("data-ind"));
            var ind = 0;
            var node = $(v).attr("data-node");
            node = node.split(",")[0];
            // var parent = $(v).attr("data-parent");
            var parent = "";
            if (parent.length > 0) {
                parent = $("div[data-docid='" + parent + "']").attr("data-node");
                parent = parent.split(",")[0];
            }
            tempObj.node = node;
            tempObj.ind = ind
            tempObj.parent = parent;
            tempObj.docID = docID;
            docItems.push(tempObj);
            //console.log($(v).attr("data-node"));
            if (indentList.indexOf(ind) == -1) {
                indentList.push(ind);
                treeObject[ind] = [];
                treeObject[0].push(tempObj);
            } else {
                try {
                    treeObject[0].push(tempObj);
                } catch (err) {
                    console.log("SOmehting fishy")
                    console.log(err)
                }
            }
            if (parent.length > 0 && docItemParentList.indexOf(parent) == -1) {
                docItemParentList.push(parent);
                docItemParentObjectList[parent] = [];
                docItemParentObjectList[parent].push(tempObj);
            } else if (parent.length > 0 && docItemParentList.indexOf(parent) != -1) {
                docItemParentObjectList[parent].push(tempObj);
            }
            allSupplys.push(docID);
            allBom.push(node);
        });
        Object.keys(treeObject).forEach(function (i) {
            if (i == 0) {
                createHTMLTable(treeObject[i], '', '#divIncludedSupplyList');
                $('#divIncludedContainerSupply').append(treeHTMLSupplyTable);
            }
        });
    }
}

function getAllEquipments() {
    //var tempArr = [];
    // console.log($("#divEquipList .divPart"))
    // console.log("Equipment")
    var tempObj;
    treeObject[0] = [];
    $("#divEquipList .divPart").each(function (i, v) {
        tempObj = new docObject();
        var docID = $(v).attr("data-docid");
        // var ind = parseInt($(v).attr("data-ind"));
        var ind = 0;
        var node = $(v).attr("data-node");
        node = node.split(",")[0];
        // var parent = $(v).attr("data-parent");
        var parent = "";
        if (parent.length > 0) {
            parent = $("div[data-docid='" + parent + "']").attr("data-node");
            parent = parent.split(",")[0];
        }
        tempObj.node = node;
        tempObj.ind = ind
        tempObj.parent = parent;
        tempObj.docID = docID;
        docItems.push(tempObj);
        //console.log($(v).attr("data-node"));
        if (indentList.indexOf(ind) == -1) {
            indentList.push(ind);
            treeObject[ind] = [];
            treeObject[0].push(tempObj);
        } else {
            treeObject[0].push(tempObj);
        }
        if (parent.length > 0 && docItemParentList.indexOf(parent) == -1) {
            docItemParentList.push(parent);
            docItemParentObjectList[parent] = [];
            docItemParentObjectList[parent].push(tempObj);
        } else if (parent.length > 0 && docItemParentList.indexOf(parent) != -1) {
            docItemParentObjectList[parent].push(tempObj);
        }


        allEquipments.push(docID);
        allBom.push(node);
        //allEquipments.push(tempArr);
        //tempArr = [];
    });
    Object.keys(treeObject).forEach(function (i) {
        if (i == 0) {
            createHTMLTable(treeObject[i], '#divEquipList', '');
            $('#divContainerEquipment').append(treeHTMLTable);
            $('#AccordianTaskEquipmentContent').append(treeHTMLTableDocTab);
        } else {
            Object.keys(docItemParentObjectList).forEach(function (k) {
                if (docItemParentObjectList[k].length > 0 && docItemParentObjectList[k][0].ind == i) {
                    createHTMLTable(docItemParentObjectList[k], '', '');
                    $("#bch" + getObjectIDFromNode(k) + " td.bomchildren").append(treeHTMLTable);
                    $("#bch" + getObjectIDFromNode(k) + " td.bomchildren").append(treeHTMLTableDocTab);
                }
            })
        }

    });


    //Included Procedure Parts
    if (isTCPublish) {
        var tempObj;
        treeObject[0] = [];
        $("#divIncludedEquipList .divPart").each(function (i, v) {
            tempObj = new docObject();
            var docID = $(v).attr("data-docid");
            // var ind = parseInt($(v).attr("data-ind"));
            var ind = 0;
            var node = $(v).attr("data-node");
            node = node.split(",")[0];
            // var parent = $(v).attr("data-parent");
            var parent = "";
            if (parent.length > 0) {
                parent = $("div[data-docid='" + parent + "']").attr("data-node");
                parent = parent.split(",")[0];
            }
            tempObj.node = node;
            tempObj.ind = ind
            tempObj.parent = parent;
            tempObj.docID = docID;
            docItems.push(tempObj);
            //console.log($(v).attr("data-node"));
            if (indentList.indexOf(ind) == -1) {
                indentList.push(ind);
                treeObject[ind] = [];
                treeObject[0].push(tempObj);
            } else {
                treeObject[0].push(tempObj);
            }
            if (parent.length > 0 && docItemParentList.indexOf(parent) == -1) {
                docItemParentList.push(parent);
                docItemParentObjectList[parent] = [];
                docItemParentObjectList[parent].push(tempObj);
            } else if (parent.length > 0 && docItemParentList.indexOf(parent) != -1) {
                docItemParentObjectList[parent].push(tempObj);
            }


            allEquipments.push(docID);
            allBom.push(node);
            //allEquipments.push(tempArr);
            //tempArr = [];
        });
        Object.keys(treeObject).forEach(function (i) {
            if (i == 0) {
                createHTMLTable(treeObject[i], '#divIncludedEquipList' ,'');
                $('#divIncludedContainerEquipment').append(treeHTMLTable);
            }
        });
    }
}

function getAllParts() {
    //var tempArr = [];
    var tempObj;
    $("#divBomList .divPart").each(function (i, v) {
        tempObj = new docObject();
        var docID = $(v).attr("data-docid");
        // var ind = parseInt($(v).attr("data-ind"));
        var ind = 0;
        var node = $(v).attr("data-node");
        node = node.split(",")[0];
        // var parent = $(v).attr("data-parent");
        var parent = "";
        if (parent.length > 0) {
            parent = $("div[data-docid='" + parent + "']").attr("data-node");
            parent = parent.split(",")[0];
        }
        tempObj.node = node;
        tempObj.ind = ind;
        tempObj.parent = parent;
        tempObj.docID = docID;
        docItems.push(tempObj);
        //console.log($(v).attr("data-node"));
        if (indentList.indexOf(ind) == -1) {
            indentList.push(ind);
            treeObject[ind] = [];
            treeObject[0].push(tempObj);
        } else {
            try {
                treeObject[0].push(tempObj);
            } catch (err) {
                console.log("SOmehting fishy")
                console.log(err)
            }
        }
        if (parent.length > 0 && docItemParentList.indexOf(parent) == -1) {
            docItemParentList.push(parent);
            docItemParentObjectList[parent] = [];
            docItemParentObjectList[parent].push(tempObj);
        } else if (parent.length > 0 && docItemParentList.indexOf(parent) != -1) {
            docItemParentObjectList[parent].push(tempObj);
        }


        allParts.push(docID);
        allBom.push(node);
        //allParts.push(tempArr);
        //tempArr = [];
    });
    Object.keys(treeObject).forEach(function (i) {
        if (i == 0) {
            createHTMLTable(treeObject[i], '#divBomList', '');
            $('#AccordianTaskPartsContent').append(treeHTMLTableDocTab);
            $('#divContainerBOM').append(treeHTMLTable);

        } else {
            Object.keys(docItemParentObjectList).forEach(function (k) {
                if (docItemParentObjectList[k].length > 0 && docItemParentObjectList[k][0].ind == i) {
                    createHTMLTable(docItemParentObjectList[k], '', '');
                    $("#bch" + getObjectIDFromNode(k) + " td.bomchildren").append(treeHTMLTable);
                    $("#bch" + getObjectIDFromNode(k) + " td.bomchildren").append(treeHTMLTableDocTab);
                }
            })
        }

    });


    //Included Procedure Parts
    if (isTCPublish) {
        var tempObj;
        treeObject[0] = [];
        $("#divIncludedBomList .divPart").each(function (i, v) {
            tempObj = new docObject();
            var docID = $(v).attr("data-docid");
            // var ind = parseInt($(v).attr("data-ind"));
            var ind = 0;
            var node = $(v).attr("data-node");
            node = node.split(",")[0];
            // var parent = $(v).attr("data-parent");
            var parent = "";
            if (parent.length > 0) {
                parent = $("div[data-docid='" + parent + "']").attr("data-node");
                parent = parent.split(",")[0];
            }
            tempObj.node = node;
            tempObj.ind = ind;
            tempObj.parent = parent;
            tempObj.docID = docID;
            docItems.push(tempObj);
            //console.log($(v).attr("data-node"));
            if (indentList.indexOf(ind) == -1) {
                indentList.push(ind);
                treeObject[ind] = [];
                treeObject[0].push(tempObj);
            } else {
                try {
                    treeObject[0].push(tempObj);
                } catch (err) {
                    console.log("SOmehting fishy")
                    console.log(err)
                }
            }
            if (parent.length > 0 && docItemParentList.indexOf(parent) == -1) {
                docItemParentList.push(parent);
                docItemParentObjectList[parent] = [];
                docItemParentObjectList[parent].push(tempObj);
            } else if (parent.length > 0 && docItemParentList.indexOf(parent) != -1) {
                docItemParentObjectList[parent].push(tempObj);
            }


            allParts.push(docID);
            allBom.push(node);
            //allParts.push(tempArr);
            //tempArr = [];
        });
        Object.keys(treeObject).forEach(function (i) {
            if (i == 0) {
                createHTMLTable(treeObject[i], '#divIncludedBomList', '');
                $('#divIncludedContainerBOM').append(treeHTMLTable);
            }
        });
    }
}

function assignBOMToggleFunctions() {
    $('span.btnPM').on("click", function (e) {
        var targetID = e.target.id.replace("btn", "bch");
        $("#" + targetID).toggle();
        e.target.innerText = ($("#" + targetID).is(":visible")) ? "-" : "+";
    })
}

function createHTMLTable(arr, HTMLTable, HTMLSupply) {
    treeHTMLTable = $("<table></table>").addClass("treePart")
    treeHTMLSupplyTable = $("<table></table>").addClass("treePart")
    treeHTMLTableDocTab = $("<table></table>").addClass("treePart")
    treeHTMLSupplyTableDocTab = $("<table></table>").addClass("treePart")
    // tempContent = '<colgroup><col width="10%"><col width="25%"><col width="55%"><col width="10%"></colgroup>'
    tempContent = '<colgroup><col width="30%"><col width="50%"><col width="20%"></colgroup>'
    tempContentSupply = '<colgroup><col width="20%"><col width="35%"><col width="35%"><col width="10%"></colgroup>'
    tempContent += '<thead><tr><td width="30%"><pre>'+(window.isTCPublish ? window.partNoHeader : 'Part No.')+'</pre></td><td width="50%"><pre>'+(window.isTCPublish ? window.descriptionHeader : 'Description')+'</pre></td><td width="20%"><pre>'+(window.isTCPublish ? window.quantityHeader : 'Quantity')+'</pre></td></tr></thead>'
    tempContentSupply += '<thead><tr><td width="20%"><pre>'+(window.isTCPublish ? window.partNoHeader : 'Part No.')+'</pre><td width="35%"><pre>'+(window.isTCPublish ? window.descriptionHeader : 'Description')+'</pre></td><td width="35%"><pre>'+(window.isTCPublish ? window.specificationHeader : 'Specification')+'</pre></td><td width="10%"><pre>'+(window.isTCPublish ? window.qtyHeader : 'Qty')+'</pre></td></tr></thead>'
    tempContent += '<tbody>'
    tempContentSupply += '<tbody>'
    arr.forEach(function (j) {
        console.log('j.id ' + j.docID)
        try {
            // if ($("div[data-docid='" + j.docID + "'] > div:nth-child(8)")[0].innerText.split(": ")[1] == "MEResource") {
            //     $("div[data-docid='" + j.docID + "']").detach().appendTo("#divEquipList")
            //     $("div[data-docid='" + j.docID + "'] > div").addClass("no-display");
            //     var strHref = "https://www.google.com";
            //     var strResourceNo = $("div[data-docid='" + j.docID + "'] > div:nth-child(1)")[0].innerText.split(": ")[1];
            //     $("div[data-docid='" + j.docID + "']").append("<div class='outillages'><a href='" + strHref + "' target='_blank'>" + strResourceNo + "</a></div>")
            // } else {
            if ($("div[data-docid='" + j.docID + "']").attr("data-type") == "2D") {
                if (HTMLTable != '') {
                    tempContent += "<tr onclick='load2D(this)' class='divPartRow' data-src='" + $(HTMLTable + " > div[data-docid='" + j.docID + "'] > div.illustration > div > a").attr("data-src") + "' data-docid='" + j.docID + "'>";
                } else {
                    tempContent += "<tr onclick='load2D(this)' class='divPartRow' data-src='" + $("div[data-docid='" + j.docID + "'] > div.illustration > div > a").attr("data-src") + "' data-docid='" + j.docID + "'>";
                }
                if (HTMLSupply != '') {
                    tempContentSupply += "<tr onclick='load2D(this)' class='divPartRow' data-src='" + $(HTMLSupply + " > div[data-docid='" + j.docID + "'] > img").attr("src") + "' data-docid='" + j.docID + "'>";
                } else {
                    tempContentSupply += "<tr onclick='load2D(this)' class='divPartRow' data-src='" + $("div[data-docid='" + j.docID + "'] > img").attr("src") + "' data-docid='" + j.docID + "'>";
                }
            } else {
                tempContent += "<tr data-docid=" + j.docID + " class='divPartRow'>";
                tempContentSupply += "<tr data-docid=" + j.docID + " class='divPartRow'>";
            }
            //tempContent += (docItemParentList.indexOf(j.node) == -1) ? "<td class='npBom'></td>" : "<td class='pmBom'><span class='btnPM' id='btn" + j.docID + "'>&#45;</span></td>";
            // tempContent += "<td class='bom_type bompart'>";

            // if ($("div[data-docid='" + j.docID + "']").attr("data-type") == "2D") {
                // tempContent += "<img src='2d.png' alt='' title='2D'>";
                // tempContentSupply += "<img src='2d.png' alt='' title='2D'>";
            // } else {
                // tempContent += "<img src='3d.png' alt='' title='3D'>";
                // tempContentSupply += "<img src='3d.png' alt='' title='3D'>";
            // }
            if(HTMLTable != '') {
                // tempContent += "</img>";
                // tempContent += "</td>";
                tempContent += "<td class='bom_partnumber bompart'>";
                tempContent += $(HTMLTable + " > div[data-docid='" + j.docID + "'] > div.PartNumber")[0].innerText.split(":")[1]
                tempContent += "</td>";
                tempContent += "<td class='bom_partname bompart'>";
                tempContent += $(HTMLTable + " > div[data-docid='" + j.docID + "'] > div.Description")[0].innerText.split(":")[1]
                tempContent += "</td>";
                tempContent += "<td class='bom_quantity bompart'>";
                tempContent += $(HTMLTable + " > div[data-docid='" + j.docID + "'] > div.Quantity")[0].innerText.split(":")[1]
                tempContent += "</td>";
                tempContent += "</tr>";
            } else {
                // tempContent += "</img>";
                // tempContent += "</td>";
                tempContent += "<td class='bom_partnumber bompart'>";
                tempContent += $("div[data-docid='" + j.docID + "'] > div:nth-child(1)")[0].innerText.split(":")[1]
                tempContent += "</td>";
                tempContent += "<td class='bom_partname bompart'>";
                tempContent += $("div[data-docid='" + j.docID + "'] > div:nth-child(2)")[0].innerText.split(":")[1]
                tempContent += "</td>";
                tempContent += "<td class='bom_quantity bompart'>";
                tempContent += $("div[data-docid='" + j.docID + "'] > div:nth-child(3)")[0].innerText.split(":")[1]
                tempContent += "</td>";
                tempContent += "</tr>";
            }

            if(HTMLSupply != '') {
                // tempContentSupply += "</img>";
                tempContentSupply += "<td class='bom_partnumber bompart'>";
                tempContentSupply += $(HTMLSupply + " > div[data-docid='" + j.docID + "'] > div.PartNumber")[0].innerText.split(":")[1]
                tempContentSupply += "</td>";
                tempContentSupply += "<td class='bom_partname bompart'>";
                tempContentSupply += $(HTMLSupply + " > div[data-docid='" + j.docID + "'] > div.Description")[0].innerText.split(":")[1]
                tempContentSupply += "</td>";
                tempContentSupply += "<td class='bom_spec bompart'>";
                tempContentSupply += $(HTMLSupply + " > div[data-docid='" + j.docID + "'] > div.Specification")[0].innerText.split(":")[1]
                tempContentSupply += "</td>";
                tempContentSupply += "<td class='bom_quantity bompart'>";
                tempContentSupply += $(HTMLSupply + " > div[data-docid='" + j.docID + "'] > div.Quantity")[0].innerText.split(":")[1]
                tempContentSupply += "</td>";
                tempContentSupply += "</tr>";
            } else {
                // tempContentSupply += "</img>";
                tempContentSupply += "<td class='bom_partnumber bompart'>";
                tempContentSupply += $("div[data-docid='" + j.docID + "'] > div.PartNumber")[0].innerText.split(":")[1]
                tempContentSupply += "</td>";
                tempContentSupply += "<td class='bom_partname bompart'>";
                tempContentSupply += $("div[data-docid='" + j.docID + "'] > div.Description")[0].innerText.split(":")[1]
                tempContentSupply += "</td>";
                tempContentSupply += "<td class='bom_spec bompart'>";
                tempContentSupply += $("div[data-docid='" + j.docID + "'] > div.Specification")[0].innerText.split(":")[1]
                tempContentSupply += "</td>";
                tempContentSupply += "<td class='bom_quantity bompart'>";
                tempContentSupply += $("div[data-docid='" + j.docID + "'] > div.Quantity")[0].innerText.split(":")[1]
                tempContentSupply += "</td>";
                tempContentSupply += "</tr>";
            }
            // }
        } catch (e) {
            console.log(e)
        }


        // if (docItemParentList.indexOf(j.node) != -1) {
        //     tempContent += "<tr id='bch" + j.docID + "'><td class='npBom'></td><td class='bomchildren'></td></tr>"
        // }
    });
    tempContent += "</tbody>";
    tempContentSupply += "</tbody>";
    treeHTMLTable.append(tempContent);
    treeHTMLTableDocTab.append(tempContent);
    treeHTMLSupplyTable.append(tempContentSupply);
    treeHTMLSupplyTableDocTab.append(tempContentSupply);
}

function getObjectIDFromNode(n) {
    var objID = "";
    docItems.forEach(function (o) {
        if (o.node == n) {
            objID = o.docID;
        }
    });
    return objID;
}

/*Masking Container*/

function maskContainer() {
    $("#maskContainer").removeClass("no-display");
}

function unMaskContainer() {
    $("#maskContainer").addClass("no-display");
}

function showElement(el, show) {
    el.style.display = show ? '' : 'none';
}


function isElementVisible(node, holder) {
    try {
        var top = holder.scrollTop,
            left = holder.scrollLeft,
            x, y, n;
        for (n = node, x = 0; n != holder; n = n.offsetParent) x += n.offsetLeft;
        for (n = node, y = 0; n != holder; n = n.offsetParent) y += n.offsetTop;
        var w = node.offsetWidth,
            h = node.offsetHeight,
            W = holder.clientWidth,
            H = holder.clientHeight;
        return !(y < top || y + h > top + H) || (x < left || x + w > left + W);
    } catch (e) {
        console.log(e);
    }

}

function setPlayRangeToCurrentStep() {
    var procedure = Cortona3DSolo.app.procedure;
    procedure.setPlayRange("%%CURRENT_STEP%%", null, procedure.RANGE_FLAGS_REQUEST_NOTIFICATION | procedure.RANGE_FLAGS_DO_NOT_RECALCULATE_POSITION);
    var startTime = procedure.getPlayableRangeStartTime(),
        stoptime = procedure.getPlayableRangeStopTime();
    window.setSlider(startTime, stoptime, startTime);
}

function setPlayRangeToCurrentStep_Filter(firstID, nextID) {
    console.log(firstID + "  - setPlayRangeToCurrentStep_Filter - " + nextID)
    var procedure = Cortona3DSolo.app.procedure;
    procedure.setPlayRange(firstID, nextID, procedure.RANGE_FLAGS_REQUEST_NOTIFICATION | procedure.RANGE_FLAGS_DO_NOT_RECALCULATE_POSITION);
    procedure.seekToSubstep(firstID, 0);
    var startTime = procedure.getPlayableRangeStartTime(),
        stoptime = procedure.getPlayableRangeStopTime();
    window.setSlider(startTime, stoptime, startTime);
}

function setPlayRangeToProcedure() {
    var procedure = Cortona3DSolo.app.procedure;
    procedure.setPlayRange();
    procedure.stop();
    procedure.seekToSubstep(procedureStepsArray[1]);
    procedure.seekToSubstep(procedureStepsArray[0]);
    // m_range.min = 0;
    // m_range.max = procedureDuration;
    // m_range.value = 0;
    window.setSlider(0, procedureDuration, 0);
}

function setPlayRangeToProcedure_Filter() {
    Cortona3DSolo.app.procedure.stop();
    Cortona3DSolo.app.procedure.setPlayableItemList(g_simulation_filtered_action_Ids);//Actions list added to procedure
    // Cortona3DSolo.app.procedure.setPlayPosition(0, true)
    // setPlayRangeToCurrentStep();
    Cortona3DSolo.app.procedure.seekToSubstep(g_simulation_filtered_action_Ids[g_simulation_filtered_action_Ids.length - 1]);
    Cortona3DSolo.app.procedure.seekToSubstep(g_simulation_filtered_action_Ids[0]);
    var startTime = Cortona3DSolo.app.procedure.getPlayableRangeStartTime(),
        stopTime = Cortona3DSolo.app.procedure.getPlayableRangeStopTime();
    var stopTimeMin = stopTime / 60;
    console.log(stopTimeMin)
    window.setSlider(startTime, stopTime, startTime);
    // $('#tabDocumentContent').append('<div class="procedureDuration">Total Time: ' + stopTimeMin.toFixed(1) + 'm</div>');
}

function getPlayRangeForStep(stepID) {
    var procedure = Cortona3DSolo.app.procedure;
    var substepIDs = $("#" + stepID + " > div.tiramisu-proc-item-content > div.substeps").children().not(".no-display");
    var setSubstepLength = substepIDs.length;
    if (setSubstepLength > 0) {
        substepIDs.each(function (index) {
            var nextSubStepID = $(this).attr("id");
            console.log(nextSubStepID)
            procedure.setPlayRange(nextSubStepID, nextSubStepID, 0);
            var startTime = procedure.getPlayableRangeStartTime(),
                stopTime = procedure.getPlayableRangeStopTime();
            var stepDuration = (stopTime - startTime) / 60;
            // console.log(stepDuration)
            // $("#" + nextSubStepID + " > div.tiramisu-proc-item-content > div.operatingDuration").html("<span class='timeText'>" + stepDuration.toFixed(1) + "m</span>")
        });
    }
}

function loadMetadataContent(i) {
    // $("#metadataJobCode").html(i["_2191E5C587E54FAAA1E6CCF88AA776D2"]);//JobCode
    $("#metadataTitle").html(i["TITLE"]);//Title
    $("#metadataSummary").html(i["_0D148D88D26147AC96A61C387C7BC892"]);//Summary
    $("#metadataWorkType").html(i["_B4BACE25B0994E489533D4279DFFE36E"]);//WorkType
    $("#metadataRole").html(i["_11F9D134D3FC46CB8C65495559369FBE"]);//Role
    $("#metadataExpectedTime").html(i["_98DFDC28D40C4F78A2676448BA21B62D"]);//ExpectedTime
    // $("#metadataWorkCell").html(i["_B83DACD52BB3409CA31E459967F4169E"]);//WorkCell
    $("#metadataPreviousJob").html(i["_8346E322217044C7A010D00814009EA1"]);//PreviousJob
    $("#metadataNextJob").html(i["_5815C6A785904C63A63B6BDCDF0CAFCE"]);//NextJob
}

//
// function getAllTorque(currentStepID, interactivity) {
//     var currentProcedureInfo = interactivity.getProcedureItemInfo(currentStepID);
//     var actionIDs = currentProcedureInfo.actions;
//     var stepIDs = currentProcedureInfo.children;
//     if (actionIDs.length > 0) {
//         for (var x in actionIDs) {
//             getTorqueValue(actionIDs[x], interactivity);
//         }
//     }
//     if (stepIDs.length > 0) {
//         for (var x in stepIDs) {
//             getAllTorque(stepIDs[x], interactivity);
//         }
//     }
// }
//
// function getTorqueValue(actionID, interactivity) {
//     var torqueTool = interactivity.getProcedureItemInfo(actionID).metadata._908343850D3848D29F071C6C62B4FD0F;
//     if (torqueTool != undefined) {
//         if (currentTorqueTool.length == 0) {
//             currentTorqueTool += torqueTool
//         } else {
//             currentTorqueTool += ', ' + torqueTool
//         }
//     }
// }

function getNextStep() {
    return $('.stepSelected.divStep').nextAll().not(".no-display").attr('id')
}

function showPart(obj, objClass, objImgClass) {

    for (var i = 0; i < docItems.length; i++) {
        try {
            var ob = Cortona3DSolo.app.procedure.interactivity.getObjectNamesByDocId(docItems[i].docID);
            var hand = ob.map(function (def) {
                return Cortona3DSolo.app.getObjectWithName(def);
            });
            Cortona3DSolo.app.setObjectsTransparency(hand, 1);
        } catch (e) {
            console.log(e)
        }
    }

    if ($(objClass).hasClass('isolate_part')) {
        resetTransparentParts(objClass, objImgClass)
    } else {
        try {
            var docID = obj.getAttribute("data-docid");
            var objects = Cortona3DSolo.app.procedure.interactivity.getObjectNamesByDocId(docID);
            var handles = objects.map(function (def) {
                return Cortona3DSolo.app.getObjectWithName(def);
            });
            Cortona3DSolo.app.setObjectsTransparency(handles, 0);
            $(objClass).addClass("isolate_part");
            $(objImgClass).attr("src", "invisible.png");
        } catch (e) {
            console.log(e);
        }
    }

}

function getPlayRangeForFilteredStep() {
    var procedure = Cortona3DSolo.app.procedure;
    var firstID = procedure.interactivity.getProcedureItemInfo(g_simulation_filtered_action_Ids[0]).parentStep;

    var stepIDs = $("div[id=" + firstID + "]").siblings().not(".no-display");
    try {
        var setLength = stepIDs.length;
        if (setLength > 0) {
            stepIDs.each(function (index) {
                var nextStepID = $(this).attr("id");
                var lastSubstepID = $("div[id=" + nextStepID + "] > div.tiramisu-proc-item-content > div.substeps > div.tiramisu-proc-item:not(.no-display)").last().attr('id');
                procedure.setPlayRange(nextStepID, lastSubstepID, procedure.RANGE_FLAGS_REQUEST_NOTIFICATION | procedure.RANGE_FLAGS_DO_NOT_RECALCULATE_POSITION);
                var startTime = procedure.getPlayableRangeStartTime(),
                    stopTime = procedure.getPlayableRangeStopTime();
                var stepDuration = stopTime - startTime;
                // console.log("Current Step: " + stepID + "  -- Duration :" + stepDuration)
                // $("#" + nextStepID + " > div.tiramisu-proc-item-content > div > .operatingDuration").html("<span class='timeText'>" + stepDuration.toFixed(1) + "s</span>")
                console.log(nextStepID)
                removeSelectedClass();
            });
        }
        if (firstID) {
            var nextID = $("div[id=" + firstID + "] > div.tiramisu-proc-item-content > div.substeps > div.tiramisu-proc-item:not(.no-display)").last().attr('id');
            procedure.setPlayRange(firstID, nextID, procedure.RANGE_FLAGS_REQUEST_NOTIFICATION | procedure.RANGE_FLAGS_DO_NOT_RECALCULATE_POSITION);
            var startTime = procedure.getPlayableRangeStartTime(),
                stopTime = procedure.getPlayableRangeStopTime();
            var stepDuration = stopTime - startTime;
            // console.log("Current Step: " + stepID + "  -- Duration :" + stepDuration)
            // $("#" + firstID + " > div.tiramisu-proc-item-content > div > .operatingDuration").html("<span class='timeText'>" + stepDuration.toFixed(1) + "s</span>")
            // removeSelectedClass()
        }
        procedure.stop();
        procedure.setPlayableItemList(g_simulation_filtered_action_Ids);
        procedure.seekToSubstep(g_simulation_filtered_action_Ids[g_simulation_filtered_action_Ids.length - 1]);
        procedure.seekToSubstep(g_simulation_filtered_action_Ids[0]);
    } catch (e) {
        console.log(e)
    }

}


//
// function getTimeForEachSubstep() {
//     var procedure = Cortona3DSolo.app.procedure;
//     var firstID = procedure.interactivity.getProcedureItemInfo(g_simulation_filtered_action_Ids[0]).parentStep;
//     var stepIDs = $("div[id=" + firstID + "]").siblings().not(".no-display"); // Return an array of step IDs
//     try {
//         var setLength = stepIDs.length; // rest of the steps
//         if (setLength > 0) {
//             stepIDs.each(function (index) {
//                 var nextStepID = $(this).attr("id");
//                 var substepIDs = $("#" + nextStepID + " > div.tiramisu-proc-item-content > div.substeps").children().not(".no-display");
//
//                 var setSubstepLength = substepIDs.length;
//                 if (setSubstepLength > 0) {
//                     substepIDs.each(function (index) {
//                         var nextSubStepID = $(this).attr("id");
//                         console.log(nextSubStepID)
//                         procedure.setPlayRange(nextSubStepID, nextSubStepID, 0);
//                         var startTime = procedure.getPlayableRangeStartTime(),
//                             stopTime = procedure.getPlayableRangeStopTime();
//                         var stepDuration = (stopTime - startTime) / 60;
//                         // console.log(stepDuration)
//                         $("#" + nextSubStepID + " > div.tiramisu-proc-item-content > div.operatingDuration").html("<span class='timeText'>" + stepDuration.toFixed(1) + "m</span>")
//                     });
//                 }
//             });
//         }
//
//         if (firstID) {
//             var substepIDs = $("#" + firstID + " > div.tiramisu-proc-item-content > div.substeps").children().not(".no-display");
//             var setSubstepLength = substepIDs.length;
//             if (setSubstepLength > 0) {
//                 substepIDs.each(function (index) {
//                     var nextSubStepID = $(this).attr("id");
//                     console.log(nextSubStepID)
//                     procedure.setPlayRange(nextSubStepID, nextSubStepID, 0);
//                     var startTime = procedure.getPlayableRangeStartTime(),
//                         stopTime = procedure.getPlayableRangeStopTime();
//                     var stepDuration = (stopTime - startTime) / 60;
//                     // console.log(stepDuration)
//                     $("#" + nextSubStepID + " > div.tiramisu-proc-item-content > div.operatingDuration").html("<span class='timeText'>" + stepDuration.toFixed(1) + "m</span>")
//                 });
//             }
//         }
//         procedure.stop();
//         procedure.setPlayableItemList(g_simulation_filtered_action_Ids);
//         procedure.seekToSubstep(g_simulation_filtered_action_Ids[g_simulation_filtered_action_Ids.length - 1]);
//         procedure.seekToSubstep(g_simulation_filtered_action_Ids[0]);
//     } catch (e) {
//         console.log(e)
//     }
//
//     //var stepIDs = $("div[id="+firstID+"]").siblings().not(".no-display");
// }
//
// function getTimeForEachSubstepNonfilter(stepID) {
//     Cortona3DSolo.app.procedure.setPlayRange(stepID, null, Cortona3DSolo.app.procedure.RANGE_FLAGS_REQUEST_NOTIFICATION);
//     try {
//         var nextStepID = $(stepID).attr("id");
//         var substepIDs = $("#" + nextStepID + " > div.tiramisu-proc-item-content > div.substeps").children().not(".no-display");
//
//         var setSubstepLength = substepIDs.length;
//         if (setSubstepLength > 0) {
//             substepIDs.each(function (index) {
//                 var nextSubStepID = $(this).attr("id");
//                 console.log(nextSubStepID)
//                 procedure.setPlayRange(nextSubStepID, nextSubStepID, 0);
//                 var startTime = procedure.getPlayableRangeStartTime(),
//                     stopTime = procedure.getPlayableRangeStopTime();
//                 var stepDuration = (stopTime - startTime) / 60;
//                 // console.log(stepDuration)
//                 $("#" + nextSubStepID + " > div.tiramisu-proc-item-content > div.operatingDuration").html("<span class='timeText'>" + stepDuration.toFixed(1) + "m</span>")
//             });
//         }
//
//     } catch (e) {
//         console.log(e)
//     }
//
//     //var stepIDs = $("div[id="+firstID+"]").siblings().not(".no-display");
// }

function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}


function generateSignOffFile() {
    // Get the data
    var itemsFormatted = [];

    $(".signOffText").each(function (i, v) {
        itemsFormatted.push({
            title: $(v).attr("data-substep"), // remove commas to avoid errors,
            savingDate: $(v).attr("data-date"),
            savingTime: $(v).attr("data-time")
        });
    });

    // Set the header
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    month = month.toString();
    var year = date.getFullYear();
    if (month.length == 1) {
        month = "0" + month;
    }
    var dateFormat = day + "/" + month + "/" + year;
    var hours = date.getHours().toString();
    var min = date.getMinutes().toString();
    var sec = date.getSeconds().toString();

    if (hours.length == 1) {
        hours = "0" + hours;
    }
    if (min.length == 1) {
        min = "0" + min;
    }
    if (sec.length == 1) {
        sec = "0" + sec;
    }
    var time = hours + ":" + min + ":" + sec;

    var headers = {
        title: 'Test Title'.replace(/,/g, ''), // remove commas to avoid errors
        savingDate: dateFormat,
        savingTime: time
    };

    // Set file name
    var fileTitle = 'signOff'; // or 'my-unique-title'
    exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
}


function getParentHandle_Name(handleValue, nameValue) {
    var nodeDocID = soloInteractivity.getDocIdByObjectName(nameValue)
    if ($(".divPartRow[data-docid='" + nodeDocID + "']").length) {
        Cortona3DSolo.app.highlightObjects(nameValue);
        $(".divPartRow[data-docid='" + nodeDocID + "']").addClass("partHighlight");
    } else {
        var parentHandleValue = Cortona3DSolo.app.getParentObject([handleValue])
        if (parentHandleValue.length != 0) {
            // console.log(parentHandleValue)
            var parentNameValue = Cortona3DSolo.app.getObjectName([parentHandleValue])
            getParentHandle_Name(parentHandleValue, parentNameValue)
        }
    }
}

function resetTransparentParts(objClass, objImgClass) {
    window.Cortona3DSolo.app.restoreObjectProperty(null, window.Cortona3DSolo.app.PROPERTY_TRANSPARENCY, false);
    $(objClass).removeClass("isolate_part");
    $(objImgClass).attr("src", "visibility.png");
    Cortona3DSolo.app.setDefaultView(true)
}

function selectTabandRow(typeName, indexVal, docid) {
    console.log(typeName);
    window.setTabView(indexVal);
    //select row
    $('tr[data-docid="' + docid + '"').addClass('selected-row');
}

function createIncludedDetails() {
    //For loop in includedDetailsArr

    window.includedDetailsArr.forEach(function (arrVal, i, includedArray) {
        // console.log("testing el")
        // console.log(arrVal[2])
        // console.log("testing index")
        // console.log(i)
        // console.log("testing array")
        // console.log(includedArray)
        // Call setIncludeDetails(arrvalues)
        window.setIncludeDetails(arrVal[0], arrVal[1], arrVal[2], arrVal[3], arrVal[4], arrVal[5], arrVal[6], arrVal[7], arrVal[8], arrVal[9], arrVal[10], arrVal[11], arrVal[12], arrVal[13], arrVal[14], arrVal[15], arrVal[16], arrVal[17])
    })

}