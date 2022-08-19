/*Using Cortona3DSolo drawing*/
Cortona3DSolo.use('drawing', {
    element: document.getElementById('solo-svg'),
    hotspotSelectionColor: "#FF8888"
});

// Cortona Setup
Cortona3DSolo.use('core', {
    totalMemory: totalMemoryValue,
    element: document.getElementById('solo-canvas'),
    prefixURL: './' + resFolder + '/Redistributables/',
    features: Cortona3DSolo.app.ENABLE_NAVIGATION_FIT_TO_OBJECT
});

/*Check interactiviy exist, then initialize*/
if (propInteractivityName != "") {
    Cortona3DSolo.app.initialize('./' + propInteractivityName);
    //let index_xml = readFile('src/content/' + ditaFile, 'utf-8');
} else {
    Cortona3DSolo.app.initialize();
}

var waitForEl = function (selector, callback) {
    if ($(selector).length) {
        callback();
    } else {
        setTimeout(function () {
            waitForEl(selector, callback);
        }, 100);
    }
};

waitForEl("#animation", function () {
    $("#solo-canvas").detach().appendTo("#animation")
});

// waitForEl("#TabHolder", function () {
//     $("#procedure").detach().appendTo("#TabHolder")
// });

// waitForEl("#TabDoc", function () {
// $("#tabInstructionsContent").detach().appendTo("#TabDoc")
// });

waitForEl("#TabParts", function () {
    $("#tabBOMContent").detach().appendTo("#TabParts")
});

waitForEl("#IncludedTabParts", function () {
    $("#tabBOMContent_Included").detach().appendTo("#IncludedTabParts")
});

waitForEl("#TabDetails", function () {
    // $("#tabBOMContent").detach().appendTo("#TabDetails")
});

// waitForEl("#TabIncludes", function () {
//     // $("#tabBOMContent").detach().appendTo("#TabIncludes")
//     $('#TabDetails > Table').clone(false).each(function(i){
//         this.id = "IncludesTable" + i;
//     }).appendTo("#TabIncludes")
// });

waitForEl("#TabSupplies", function () {
    $("#tabSuppliersContent").detach().appendTo("#TabSupplies");
});

waitForEl("#IncludedTabSupplies", function () {
    $("#tabSuppliersContent_Included").detach().appendTo("#IncludedTabSupplies")
});

waitForEl("#TabSST", function () {
    $("#tabEquimentContent").detach().appendTo("#TabSST")
});

waitForEl("#IncludedTabSST", function () {
    $("#tabEquimentContent_Included").detach().appendTo("#IncludedTabSST")
});

waitForEl("#solo-svg-holder", function () {
    $(".cortona3dsolo-svg").detach().appendTo("#solo-svg-holder")
});


// waitForEl("#AccordianTaskDetailsContent", function () {
//     // $("#tabDocumentContent").detach().appendTo("#AccordianTaskContent")
//     $('#TabDetails > table').clone(false).appendTo("#AccordianTaskDetailsContent")
// });

waitForEl("#TabProcedure", function () {
    $("#tabDocumentContent").detach().appendTo("#TabProcedure");
});

waitForEl("#AccordianTaskContent", function () {
    // $("#tabDocumentContent").detach().appendTo("#AccordianTaskContent")
    $('.steps > div').clone(false).each(function (i) {
        this.id = "id" + i;
    }).appendTo("#AccordianTaskContent")
});

// waitForEl("#copyright_text", function () {
//     $("#tabPreContent > div.copyrightsection").detach().appendTo("#copyright_text")
// });

Cortona3DSolo.expand(Cortona3DSolo.app, {
    didFinishLoadDocument: function (doc) {
        window.hideLoading();
        updateBtnProperties();
        displayDirection();
        // console.log(Cortona3DSolo.app.procedure.interactivity.json.SimulationInteractivity.DocumentTemplate["#text"])
        // console.log(doc.comments)
        g_procedure = Cortona3DSolo.app.procedure;
        publishOptions = Cortona3DSolo.app.getOptions();
        soloInteractivity = Cortona3DSolo.app.procedure.interactivity;
        soloInteractivityProjectMetadata = soloInteractivity.getProcedureId();
        taskId = soloInteractivity.getProcedureId();
        procedureStepsArray = soloInteractivity.getProcedureItemInfo(taskId).children;
        lastStepId = procedureStepsArray[procedureStepsArray.length - 1];
        max_range_value = doc.duration;//Pyda 20170818
        procedureDuration = (doc.duration);
        isBlocked = false;//not Blocked to access 3D content.

        // Add total time
        // $('#tabDocumentContent').append('<div class="procedureDuration">Total Time: '+procedureDuration.toFixed(1)+'m</div>');
        // Load Metadata
        loadMetadataContent(soloInteractivityProjectMetadata);

        function clickHandler() {
            console.log("2D Image Clicked")
            if (currentMode != "Job" && !isSvgVisibile) {
                if (isSvgVisibile) {//Pyda 20170831
                    closeSVG()
                }
                if (isCanvasVisible) {
                    if (!isPanelOpen) removeNoPanel();
                    if ($('#solo-canvas-holder').hasClass('no-show')) {//Pyda 20170818
                        $('#solo-canvas-holder').removeClass('no-show');
                    }

                    var procedure = Cortona3DSolo.app.procedure;
                    var id = this.id;
                    console.log(id);
                    if (g_simulation_filtered_action_Ids[0] == "") {
                        procedure.stop();

                        procedure.setPlayRange();

                        m_locked = task_id == id ? true : false;//Checking it is main task id or not.Pyda 20170818
                        procedure.seekToSubstep(id);
                        if (currentMode == "Job") {//Setting range
                            setPlayRangeToCurrentStep(); //test for set range Pyda 20170818
                        } else {
                            window.setSlider(0, doc.duration, 0);
                        }
                    } else {
                        if (currentMode == "Job") {//Setting range
                            console.log(id)
                        } else {
                            console.log(id)
                            setPlayRangeToProcedure_Filter();
                            Cortona3DSolo.app.procedure.seekToSubstep(id);
                        }
                    }
                    console.log("3D Image Stop")
                    Cortona3DSolo.app.procedure.pause();//Pyda 20170908
                }
            }
        }

        function clickHandlerItem() {

            if (isCanvasVisible) {
                if (!isPanelOpen) removeNoPanel();
                if ($('#solo-canvas-holder').hasClass('no-show')) {//Pyda 20170818
                    $('#solo-canvas-holder').removeClass('no-show');
                }
                var interactivity = Cortona3DSolo.app.procedure.interactivity;
                var docid = this.id;
                Cortona3DSolo.app.attnObjects(interactivity.getObjectNamesByDocId(docid));

            }
            // Get type of part
            if (allParts.contains(docid)) {
                selectTabandRow('parts', 2, docid);
            } else if (allSupplys.contains(docid)) {
                selectTabandRow('Supplys', 5, docid);
            } else if (allEquipments.contains(docid)) {
                selectTabandRow('Equipments', 6, docid);
            }
            //Change tab based on item type
            event.stopPropagation();
        }

        // Array.prototype.slice.call(holder.getElementsByClassName('2d-link')).forEach(
        //     function (el) {
        //         console.log("2d link")
        //         el.addEventListener('click', load2D);// load2D method called when 2d-link class element is clicked
        //     });

        Cortona3DSolo.app.setDefaultBackgroundColors("#FFFFFF");

        // setNewSimulation(
        //     [["actions", attributeIds],
        //         ["operator", operatorValue]]
        // );
        g_simulation_filtered_action_Ids = [""];
        if (g_simulation_filtered_action_Ids[0] == "") {
            // Time setup without filtering
            var stepID,
                counter = 0;
            for (stepID of procedureStepsArray) {
                var temp = getPlayRangeForStep(stepID);
            }
            setPlayRangeToProcedure();

            // Set Toolbar
            window.setSlider(0, doc.duration, 0);
        } else {
            //Time setup with filtering
            //getPlayRangeForFilteredStep();
            // getTimeForEachSubstep();
        }

        // make the tab panel height auto
        var htmlHeight = $(document).height();
        var tabHeaderHeight = $('.tab-header').height();
        var setHeight = htmlHeight - tabHeaderHeight;
        console.log(htmlHeight)
        $(".tab-content").css('height', setHeight + '!important');

        // Table SST
        waitForEl("#TabSST", function () {
            // Select Hotspot
            $("#TabSST").find(".divPartRow").click(function () {
                console.log("SST table click row")
                $(this).addClass('selected-row').siblings().removeClass("selected-row");
            })

            // Hover Hotspot
            Cortona3DSolo.app.removeHighlightObjects();
            $("#TabSST").find(".divPartRow").mousemove(function () {
                console.log("SST table hover row")
                var docID = $(this).attr('data-docid')

                Cortona3DSolo.app.hoverTable(docID)
            })

            // remove table header and label if there is no row
            if($("#divIncludedContainerEquipment > table > tbody > tr").length === 0){
                $("#divIncludedContainerEquipment").hide();
                $("#tab-content-6").find(".labelIncluded").hide();

            }

            if (isTCPublish) {
                $('#tabEquimentContent_Included').removeClass('no-display');
            }
        });

        // Table Parts
        waitForEl("#TabParts", function () {
            if (isTCPublish) {
                $('#tabBOMContent_Included').removeClass('no-display');
            }
            if($("#divIncludedContainerBOM > table > tbody > tr").length === 0){
                $("#divIncludedContainerBOM").hide();
                $("#tab-content-2").find(".labelIncluded").hide();

            }

            // Select Hotspot
            $("#TabParts").find(".divPartRow").click(function () {
                console.log("Parts table click row")
                $(this).addClass('selected-row').siblings().removeClass("selected-row");
            })

            // Hover Hotspot
            Cortona3DSolo.app.removeHighlightObjects();
            $("#TabParts").find(".divPartRow").mousemove(function () {
                console.log("Parts table hover row")
                var docID = $(this).attr('data-docid')

                Cortona3DSolo.app.hoverTable(docID)
            })
        });

        // supplies tab
        waitForEl("#TabSupplies", function () {
            // Select Hotspot
            $("#TabSupplies").find(".divPartRow").click(function () {
                console.log("Supplies table click row")
                $(this).addClass('selected-row').siblings().removeClass("selected-row");
            })

            // Hover Hotspot
            Cortona3DSolo.app.removeHighlightObjects();
            $("#TabSupplies").find(".divPartRow").mousemove(function () {
                console.log("Supplies table hover row")
                var docID = $(this).attr('data-docid')

                Cortona3DSolo.app.hoverTable(docID)
            })

            //display spec column value
            $("#TabSupplies > #tabSuppliersContent > #divContainerSupply > table > tbody > tr").each(function (index, tr) {
                var docID = $(tr).attr("data-docid");
                console.log(docID);
                try {
                    var specMetadata = Cortona3DSolo.app.procedure.interactivity.getDocItemInfo(docID).metadata["_1004928C60894FB693CF6331C2E9C1D8"];
                    $(tr).children("td:nth-child(3)").text(specMetadata);
                } catch (err) {
                }

                // var specMetadata = Cortona3DSolo.app.procedure.interactivity.getDocItemMetadata(docID).Specification;
                // console.log(specMetadata)

            });

            if (isTCPublish) {
                $('#tabSuppliersContent_Included').removeClass('no-display');

                // $("#IncludedTabSupplies > #tabSuppliersContent_Included > #divIncludedContainerSupply > table > tbody > tr").each(function (index, tr) {
                //     var docID = $(tr).attr("data-docid");
                //     console.log(docID);
                //     // var specMetadata = Cortona3DSolo.app.procedure.interactivity.getDocItemInfo(docID).metadata["_1004928C60894FB693CF6331C2E9C1D8"];
                //     var specMetadata = Cortona3DSolo.app.procedure.interactivity.getDocItemMetadata(docID).Specification;
                //     console.log(specMetadata)
                //     $(tr).children("td:nth-child(3)").text(specMetadata);
                // });
            }
        });

        // details tab
        // waitForEl("#TabDetails", function () {
        //     // remove empty row
        //     $("#TabDetails > table > tbody > tr").each(function (i, tr) {
        //         var textValue = $(tr).children('.td-data').text();
        //         // console.log(textValue)
        //         if (textValue == "XXXXXXXXXXXXXXXXX" || textValue == "Common" || textValue.length ==0) {
        //             $(tr).hide();
        //         }
        //     })
        //
        //     if (window.revisionData.length == 0) {
        //         $("#revision-table-row").hide();
        //     }
        // });

        //include tab
        waitForEl("#TabIncludes", function () {
            createIncludedDetails();

            // $("#TabIncludes > #tabDocumentContent > .steps").each(function (index, div) {
            //     if (!($(div).children("div").hasClass('divStep'))) {
            //         // $('#filterProcedure').addClass('hide-filter');
            //         $('#filterProcedure').hide();
            //     }
            // });

            $("#buttonExpandList").addClass("selected-button");
            document.getElementById("buttonCollapseList").addEventListener("click", function () {
                $("#buttonCollapseList").addClass("selected-button");
                $("#buttonExpandList").removeClass("selected-button");
                $("#TabIncludes > div > table > tbody > tr").each(function (index, tr) {
                    var rowElement = $(tr);
                    if (!(rowElement.hasClass('description-row'))) {
                        $(rowElement).hide();
                    }
                })
            });

            document.getElementById("buttonExpandList").addEventListener("click", function () {
                $("#buttonExpandList").addClass("selected-button");
                $("#buttonCollapseList").removeClass("selected-button");
                $("#TabIncludes > div > table > tbody > tr").each(function (index, tr) {
                    // $(div).children("div").show();
                    $(tr).show();
                })
            });
        });

        //accordian content
        waitForEl("#AccordianTaskDetailsContent", function () {
            // $("#tabDocumentContent").detach().appendTo("#AccordianTaskContent")
            window.setDetails();
            $('#TabDetails > table').clone(true).each(function (i) {
                this.id = "id-accordian" + i;
            }).appendTo("#AccordianTaskDetailsContent")
            var valueVar = $('#TabDetails > table > tbody > tr > th:nth-child(1)').text();
            console.log(valueVar);

            // remove empty row
            $("#AccordianTaskDetailsContent > table > tbody > tr").each(function (i, tr) {
                var textValue = $(tr).children('.td-data').text();
                // console.log(textValue)
                if (textValue.length == 0) {
                    $(tr).hide();
                }
            })
        });

        waitForEl("#AccordianTaskContent", function () {
            $("#AccordianTaskContent > .divStep > .tiramisu-proc-item-content > div").each(function (i, div) {
                div.id = "id_" + i;
            })
        });


        // procedure tab
        waitForEl("#TabProcedure", function () {
            procedureDiv = document.getElementById('TabProcedure');
            //remove flash at the beginning
            $('.warning-flash').removeClass('warning-flash');
            $('.caution-flash').removeClass('caution-flash');
            $('.note-flash').removeClass('note-flash');
            $('.warning-flash-step').removeClass('warning-flash-step');
            $('.caution-flash-step').removeClass('caution-flash-step');
            $('.note-flash-step').removeClass('note-flash-step');
            var filterState = false;

            $("#TabProcedure > #tabDocumentContent > .steps > div").each(function (index, div) {
                if (($(div).find("span").hasClass('torque-step'))) {
                    $(div).children(".tiramisu-proc-item-number").addClass('torque-step-number');
                    // $(this).addClass('torque-row');
                    // $(div).addClass('torque-row');
                    $(div).addClass('torque-row');
                    filterState = true;
                }

                if (($(div).find("div").hasClass('included-procedure'))) {
                    $(div).children(".tiramisu-proc-item-number").css('background', '#9d9d9c')
                }

                // var torqueElement = $(div);
            });

            if (filterState === false) {
                // $('#filterProcedure').addClass('hide-filter');
                $('#filterProcedure').hide();
            }

            $("#buttonAll > label").addClass("selected-button");
            document.getElementById("buttonTorque").addEventListener("click", function () {
                $("#buttonTorque > label").addClass("selected-button");
                $("#buttonAll > label").removeClass("selected-button");
                $("#TabProcedure > #tabDocumentContent > .steps > div").each(function (index, div) {
                    var divElement = $(div);
                    if (!(divElement.hasClass('torque-row'))) {
                        // $('#TabProcedure > #tabDocumentContent > .steps > .divStep').hide();
                        $(divElement).hide();
                    } else {
                        $(divElement).show();
                    }
                    ;
                })
            });

            document.getElementById("buttonAll").addEventListener("click", function () {
                $("#buttonAll > label").addClass("selected-button");
                $("#buttonTorque > label").removeClass("selected-button");
                $("#TabProcedure > #tabDocumentContent > .steps > div").each(function (index, div) {
                    // $(div).children("div").show();
                    $(div).show();
                    // $('.divStep').show();
                })
            });

            // if(($("#TabProcedure > #tabDocumentContent > .steps > div").hasClass('divStep'))){
            //     $('#filterProcedure').addClass('hide-filter');
            // };

            Array.prototype.slice.call(procedureDiv.getElementsByClassName('divStep')).forEach(
                function (el) {
                    el.addEventListener('click', clickHandler);
                });
            Array.prototype.slice.call(procedureDiv.getElementsByClassName('doc-item')).forEach(
                function (el) {
                    el.addEventListener('click', clickHandlerItem, true);
                });
        });
        //setPlayRangeToProcedure_Filter();


        $("div.divStep").click(function () {
            $("div.divStep").removeClass("stepSelected");
            $(this).addClass("stepSelected");
        })

        // Print Output
        printOutputHeader();
        // html_table_to_excel('xlsx');

        // Manual Content
        manualContent();

        //check for language to declare font
        if (window.docLanguage == "ar-SA") {
            document.getElementsByTagName('body')[0].style.fontFamily = "Arial";
            $("#navigation_fly").css({'cssText': 'font-family: Arial !important'});
            $("h1").css({'cssText': 'font-family: Arial !important'});
            $("pre").css({'cssText': 'font-family: Arial !important'});
            $(".tiramisu-proc-item").css({'cssText': 'font-family: Arial !important'});
            $(".caution").css({'cssText': 'font-family: Arial !important; text-align: justify;'});
            $(".warning").css({'cssText': 'font-family: Arial !important; text-align: justify;'});
            $(".danger").css({'cssText': 'font-family: Arial !important; text-align: justify;'});
            $(".note").css({'cssText': 'font-family: Arial !important; text-align: justify;'});
            $(".filterLabel").css({'cssText': 'font-family: Arial !important'});
            $(".MuiTableCell-root").css({'cssText': 'font-family: Arial !important'});
            $(".labelCurrent").css({'cssText': 'font-family: Arial !important; text-align: right;'});
            $(".filterTitle").css({'cssText': 'font-family: Arial !important; text-align: right;'});
        }

        /*BI 26May22: Hidden Tab if doesnt have content*/
        hiddenTab();

        //SK 14/07/2022: Ignore transparent item
        Cortona3DSolo.app.pickerTransparencyThreshold = 0.2;
    },

    firstFrameDidArrive: function () {
        document.body.classList.add('ready');

        // Selected Object on the canvas
        $("canvas").mousemove(function (e) {
            $("canvas").click(function () {
                mouseX = e.originalEvent.layerX;
                mouseY = e.originalEvent.layerY;
                pickedObject = Cortona3DSolo.app.pickObject(mouseX, mouseY, false);

                if (pickedObject) {
                    Cortona3DSolo.app.restoreObjectProperty(0, Cortona3DSolo.app.PROPERTY_DIFFUSE_COLOR,
                        true);
                    $(".divPartRow").removeClass("selected-row")
                }
                if(pickedObject) {
                    var docID = soloInteractivity.getDocIdByObjectName(pickedObject.name)
                    Cortona3DSolo.app.setObjectPropertyf(pickedObject.handle, Cortona3DSolo.app.PROPERTY_DIFFUSE_COLOR,
                        true, (201 / 255), (173 / 255), (109 / 255))
                    $(".divPartRow[data-docid='" + docID + "']").addClass("selected-row")
                } else {
                    Cortona3DSolo.app.restoreObjectProperty(0, Cortona3DSolo.app.PROPERTY_DIFFUSE_COLOR, true);
                    $(".divPartRow").removeClass("selected-row")
                }
            });
        });

        // Hover object on the canvas
        $("canvas").mousemove(function (e) {
            mouseX = e.originalEvent.layerX;
            mouseY = e.originalEvent.layerY;
            pickedObject = Cortona3DSolo.app.pickObject(mouseX, mouseY, false);

            Cortona3DSolo.app.removeHover3DItem();
            $(".divPartRow").removeClass("partHighlight")
            if(pickedObject) {
                var docID = soloInteractivity.getDocIdByObjectName(pickedObject.name)

                Cortona3DSolo.app.hover3DItem(pickedObject);
                $(".divPartRow[data-docid='" + docID + "']").addClass("partHighlight")

                console.log('pickedObject ' + pickedObject.name +' '+ pickedObject.handle)
            }
        });

        $(window).resize(function (e) {
            canvasResize();
            manualContent();
            updateBtnProperties();

            if (($(window).width() < 800)) {
                $("#MiniDrawerDiv").css({'cssText': 'height: 200% !important;'});
            }

            if (($(window).width() < 800) && (window.docLanguage === "ar-SA")) {
                $("#TabDiv").css({'cssText': 'margin-right: 10% !important;'});
            } else if (($(window).width() > 800) && (window.docLanguage === "ar-SA")) {
                $("#TabDiv").css({'cssText': 'margin-right: unset !important;'});
            } else if (($(window).width() < 800) && (window.docLanguage !== "ar-SA")) {
                $("#TabDiv").css({'cssText': 'margin-left: 10% !important;'});
            } else if (($(window).width() > 800) && (window.docLanguage !== "ar-SA")) {
                $("#TabDiv").css({'cssText': 'margin-left: unset !important;'});
            }
        });

        // Change buttons position dynamically on scroll
        $("#MiniDrawerDiv").scroll(function () {
            var yTransparency = $("#TransparencyBtn").offset().top;
            var yMultiView = $("#MultiViewBtn").offset().top;
            var y3DView = $("#_3dViewBtn").offset().top;
            // var yShow2D = $("#2DViewBtn").offset().top;

            $("#showTransparent").css({top: yTransparency});
            $("#showMulti").css({top: yMultiView});
            $("#show3D").css({top: y3DView});
            // $("#show2D").css({top: yShow2D});
        });
    },
    /*Click on DocId*/
    attnObjects: function (defs) {
        var interactivity = Cortona3DSolo.app.procedure.interactivity;
        var handles = defs.map(function (def) {
            return Cortona3DSolo.app.getObjectWithName(def);
        });
        // Cortona3DSolo.app.fitSceneInView(true);//Pyda 20170613
        Cortona3DSolo.app.fitObjectsInView(handles, true);
        handles.forEach(function (handle) {
            Cortona3DSolo.app.restoreObjectProperty(0, Cortona3DSolo.app.PROPERTY_DIFFUSE_COLOR,
                true);
            Cortona3DSolo.app.setObjectPropertyf(handle, Cortona3DSolo.app.PROPERTY_DIFFUSE_COLOR,
                true, (201 / 255), (173 / 255), (109 / 255));
            // setTimeout(function () {
            //     Cortona3DSolo.app.restoreObjectProperty(0, Cortona3DSolo.app.PROPERTY_DIFFUSE_COLOR,
            //         true);
            // }, 2000);
        });
    },
    //This function fits object into view
    fitObjects: function (docid) {
        var objects = soloInteractivity.getObjectNamesByDocId(docid);
        var handles = objects.map(function (def) {
            return Cortona3DSolo.app.getObjectWithName(def);
        });
        Cortona3DSolo.app.fitObjectsInView(handles, true);
    },
    hover3DItem: function (i) {
        console.log("hover item");
        // Cortona3DSolo.app.removeHighlightObjects();
        if ($(".divPartRow.partHighlight").length) {
            $(".divPartRow.partHighlight").removeClass("partHighlight");
        }
        try {
            getParentHandle_Name(i.handle, i.name)
        } catch (err) {
        }
    },
    removeHover3DItem: function () {
        Cortona3DSolo.app.removeHighlightObjects();
        if ($(".divPartRow.partHighlight").length) {
            $(".divPartRow.partHighlight").removeClass("partHighlight");
        }
    },

//This function to highlight the 3D object Pyda 20180226
    highlightObjects: function (name) {
        var handles = Cortona3DSolo.app.getObjectWithName(name);
        setTimeout(function () {
            try {
                Cortona3DSolo.app.setObjectPropertyf(handles, Cortona3DSolo.app.PROPERTY_EMISSIVE_COLOR, true, (81 / 255), (141 / 255), (171 / 255));
            } catch (e) {
                console.log(e);
            }
        }, 200);
    },

//This function to remove highlight the 3D object
    removeHighlightObjects: function () {
        setTimeout(function () {
            Cortona3DSolo.app.restoreObjectProperty(0, Cortona3DSolo.app.PROPERTY_EMISSIVE_COLOR,
                true);
        }, 200);
    },

    // BI 2Aug22: This function to highlight the 3D object when hover dpl table
    hoverTable: function (docID) {
        var handles = soloInteractivity.getObjectNamesByDocId(docID);
        handles = handles[handles.length -1];
        handles = Cortona3DSolo.app.getObjectWithName(handles);
        setTimeout(function () {
            try {
                Cortona3DSolo.app.setObjectPropertyf(handles, Cortona3DSolo.app.PROPERTY_EMISSIVE_COLOR, true, (81 / 255), (141 / 255), (171 / 255));
            } catch (e) {
                console.log(e);
            }
        }, 200);
    },
});


Cortona3DSolo.expand(Cortona3DSolo.app.procedure, {
    didChangePlayerState: function (position, state) {
        m_played = !!(state & 1);
        if (m_played == false) {
            pauseAudio();
            window.triggerChangeMediabar("btn_pause", true);
            window.triggerChangeMediabar("btn_play", false);
        } else {
            resumeAudio();
            window.triggerChangeMediabar("btn_pause", false);
            window.triggerChangeMediabar("btn_play", true);
        }
        window.setSliderValue(position);
        if (state === 0x100) {
            // stop
        }
    },

    didEnterSubstepWithName: function (substepid) {
        console.log("enter step");
        removeSelectedClass()
        // Array.prototype.slice.call(holder.getElementsByClassName('selected')).forEach(function (el) {
        //     el.classList.remove('selected');
        // });
        var interactivity = Cortona3DSolo.app.procedure.interactivity;
        if (interactivity) {
            var current = interactivity.getProcedureItemInfo(substepid);
            // var current = interactivity.getProcedureItemInfo(current.parent);
            console.log(current);

            //debugVar = current
            if (current.parentStep != currentParentStep) {
                //currentTorqueTool = current.metadata._908343850D3848D29F071C6C62B4FD0F;
                //getAllTorque(current.parentStep,interactivity);
                currentTorqueTool = "";
                // getAllTorque(current.parentStep,interactivity);
                currentParentStep = current.parentStep;
            }

            var a = [];
            while (current) {
                var node = document.getElementById(current.id);
                var nodeJQ = $("div.steps > div.divStep > div.tiramisu-proc-item-content > div.substeps > div#" + current.id)
                if (node) {
                    a.push(node);
                    node.classList.add('stepSelected');//Highlight HTML;\
                    console.log(current.id);
                    nodeJQ.addClass('stepSelected')

                }
                current = interactivity.getProcedureItemInfo(current.parent);//Looking for Parent Substep
                console.log(current)
            }


            // if (currentTab == "tab5") {
            var procedureHolder = document.getElementById('TabProcedure');//Procedure-holder element
            if (!isElementVisible(a[a.length - 1], procedureHolder)) a[a.length - 1].scrollIntoView(true);
            if (!isElementVisible(a[0], procedureHolder)) a[0].scrollIntoView(false);
            // }

            if ($('.divStep.stepSelected').length > 0) {
                //     $("#AccordianTaskContent").html($('.divStep.stepSelected')[0].innerHTML);
                loadInstuctionsParts()
            }

            //SK 22/04/2022 : 2d button disable when there is no 2d image in the current step
            if ($('.divStep.stepSelected').find(".image-2d").length != 0) {
                $("#View2DBtn").removeClass("disabled-button");
                $("#View2DBtn").click(function () {
                    var currentStepId = $(".stepSelected").attr("id");
                    // var drawingElem = $("#" + currentStepId).children().find("a.image-2d").html();
                    var drawingSrc = $("#" + currentStepId).find(".image-2d").attr("data-src");
                    var drawingTitle = $("#" + currentStepId).find(".image-2d").attr("data-title");
                    addContentToSVG(drawingTitle, drawingSrc, false);
                })
                //BI 10/5/2022 : PrintOutput button enable when there is no 2d image in the current step
                /*$("#PrintOutputBtn").removeClass("disabled-button");*/
            } else {
                addContentToSVG('', '', true);
                $("#View2DBtn").addClass("disabled-button");

            }

        }


        // removeSelectedClass()

        // var interactivity = Cortona3DSolo.app.procedure.interactivity;
        // if (interactivity) {
        //     var current = interactivity.getProcedureItemInfo(substepid);
        //     if (interactivity) {
        //         var current = interactivity.getProcedureItemInfo(substepid);
        //
        //         if (current) {
        //             var substepDiv = $("#" + current.id);
        //             if (substepDiv.length) {
        //                 currentSubstepIdInfo = current;
        //             } else {
        //                 currentSubstepIdInfo = interactivity.getProcedureItemInfo(current.parent);
        //             }
        //             displayCurrentSubstepContent();
        //         }
        //         // displayComments()
        //     }
        // }
    },
    didFireEvent: function (type, id, title, info) {
        console.log("id : " + id)
        console.log("type : " + type)
        var interactivity = Cortona3DSolo.app.procedure.interactivity;
        var obj = interactivity.getProcedureItemInfo(id);
        var eventID = "#" + obj.description
        console.log(eventID)
        Cortona3DSolo.app.procedure.pause();
        //add flashes for the note, warning and caution steps
        if (($(eventID).hasClass("warning"))) {
            $(eventID).addClass("warning-flash");
            setTimeout(function () {
                $('.warning-flash').removeClass('warning-flash');
                // Cortona3DSolo.app.procedure.play();
            }, 1500);
        } else if (($(eventID).hasClass("caution"))) {
            $(eventID).addClass("caution-flash");
            // Cortona3DSolo.app.procedure.pause();
            setTimeout(function () {
                $('.caution-flash').removeClass('caution-flash');
                // Cortona3DSolo.app.procedure.play();
            }, 1500);
        } else if (($(eventID).hasClass("note"))) {
            $(eventID).addClass("note-flash");
            setTimeout(function () {
                $('.note-flash').removeClass('note-flash');
            }, 3000);
        }
        if (($(eventID).hasClass("note"))) {
            setTimeout(function () {
                Cortona3DSolo.app.procedure.play();
            }, 3000);
        } else {
            setTimeout(function () {
                Cortona3DSolo.app.procedure.play();
            }, 1500);
        }


        // var interactivity = Cortona3DSolo.app.procedure.interactivity;
        // var obj = interactivity.getProcedureItemInfo(id);
        // currentObj = obj;
        // // Cortona3DSolo.app.procedure.pause();
        // // warning id = obj.description
        // var eventID = obj.description
        // console.log(eventID)
        // Using jquery find message text from index html
        // var messageText = $("[data-type='event'][id='" + eventID + "'] > div > span > span").last().text();
        // window.setMessagesPopup(obj.eventType, messageText);


    },
});

function displayComments(s) {
    document.getElementById('display-comments').innerHTML = s;
}


function canvasResize() {
    var width = $("canvas").innerWidth();
    var height = $("canvas").innerHeight();
    Cortona3DSolo.app.resize(width, height);
    // console.log("Width: " + width + " Height:" + height)
}

Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}

/* Print Output */
function printOutputHeader() {
    // Print Output Header
    $('.Header-Row1').append(window.modelData);
    $('.Header-Row2').append(window.modelYearData + ', ', window.engineData, ', ' + window.transmissionData + ', '
        + window.lhdRhdData + ', ' + window.bodyData + ', ' +window.repairTime + ' hours');
    $('.Header-Row3').append(window.titleData);
}

// Do before print event
window.addEventListener("beforeprint", function (event) {
});
// Do after print event
window.addEventListener("afterprint", function (event) {
    window.Cortona3DSolo.app.resize(window.canvasWidth, window.canvasHeight);
});


function setTransparencySlider(objectID, objectName) {
    return Cortona3DSolo.app.getObjectsTransparency(objectID);
}

function manualContent() {
    // set height for manual content
    let manualContent = document.querySelector('#manualContent').getBoundingClientRect().height
    let header = document.querySelector('#manualContent > header').getBoundingClientRect().height
    $("#manualContent > div").css("height", manualContent - header);
    // console.log('height screen ' + screen.height)
    // console.log('height header ' + header)
}


//get position of an element
function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return {top: _y, left: _x};
}

function updateBtnProperties() {
    var xOffset = $("#MiniDrawerDiv").width();
    var svgSize = $("#MainDiv").width();
    var heightBtn = $(".BtnGrp").height();
    var yMultiView = getOffset(document.getElementById('MultiViewBtn')).top;
    var y3DView = getOffset(document.getElementById('_3dViewBtn')).top;
    var yTransparency = getOffset(document.getElementById('TransparencyBtn')).top;
    console.log("y: " + yMultiView);
    console.log("x: " + heightBtn);
    $("#btnViewMulti").css({height: heightBtn});
    $("#btn3DView").css({height: heightBtn});
    $("#showTransparent > div").css({height: heightBtn});
    $("#SvgDrawer > div").css({left: xOffset, width: svgSize - xOffset});

    if (window.docLanguage === "ar-SA") {
        $("#showMulti").css({top: yMultiView, right: xOffset, left: "unset"});
        $("#show3D").css({top: y3DView, right: xOffset, left: "unset"});
        $("#showTransparent").css({top: yTransparency, right: xOffset, left: "unset"});

    } else {
        $("#showMulti").css({top: yMultiView, left: xOffset});
        $("#show3D").css({top: y3DView, left: xOffset});
        $("#showTransparent").css({top: yTransparency, left: xOffset});
    }
}

/*BI 26May22: Hide tab if doesnt has content*/
function hiddenTab() {
    /*Parts Tab*/
    if ($('#divBomList > *').length == 0) {
        $('#full-width-tab-2').hide()
        $('#document-parts').hide()
        console.log('Part hidden')
    } else if($('#divBomList > *').length > 0) {
        $('#full-width-tab-2').show()
        $('#document-parts').show()
    }
    /*Includes Tab*/
    if (isTCPublish == false) {
        if ($('#TabIncludes > *').length == 0) {
            $('#full-width-tab-4').hide()
            console.log('Include tab hidden')
        } else if ($('#TabIncludes > *').length > 0) {
            $('#full-width-tab-4').show()
        }

        if ($('#TabIncludes > *').length == 0) {
            $('#document-include').hide()
            console.log('Include hidden')
        } else if ($('#AccordianTaskIncludeContent > *').length > 0) {
            $('#document-include').show()
        }
    } else {
        if ($('#TabIncludes > *').length == 0) {
            $('#full-width-tab-4').hide()
            console.log('Include tab hidden')
        } else if ($('#TabIncludes > *').length > 0) {
            $('#full-width-tab-4').show()
        }
        
        if ($('#AccordianTaskIncludeContent > *').length == 0) {
            $('#document-include').hide()
            console.log('Include hidden')
        } else if ($('#AccordianTaskIncludeContent > *').length > 0) {
            $('#document-include').show()
        }
    }
    /*Supplies Tab*/
    if ($('#divSupplyList > *').length == 0) {
        $('#full-width-tab-5').hide()
        $('#document-supplies').hide()
        console.log('Supplies hidden')
    } else if($('#divSupplyList > *').length > 0) {
        $('#full-width-tab-5').show()
        $('#document-supplies').show()
    }
    /*SST Tab*/
    if ($('#divEquipList > *').length == 0) {
        $('#full-width-tab-6').hide()
        $('#document-sst').hide()
        console.log('SST hidden')
    } else if($('#divEquipList > *').length > 0) {
        $('#full-width-tab-6').show()
        $('#document-sst').show()
    }
}


function displayDirection() {
    // Display Direction
    const displayDirection = (window.docLanguage === "ar-SA") ? "right;" : "left;";
    const displayClass = (window.docLanguage === "ar-SA") ? "rtl" : "ltr";
    const displayClassCenter = (window.docLanguage === "ar-SA") ? "rtl-center" : "ltr-center";
    const paddingSide = (window.docLanguage === "ar-SA") ? "padding-right:" : "padding-left:";
    $("#divContainerBOM > table > tbody > tr > td:not(:nth-child(3))").css({'cssText': 'text-align:' + displayDirection + paddingSide + '10px'});
    $("td > pre").css({'cssText': 'text-align:' + displayDirection});
    $(".labelCurrent, .labelIncluded, .filterTitle").css({'cssText': 'text-align:' + displayDirection});
    $(".dpl-td-vertical, .dpl-th-vertical, .tiramisu-proc-item-content, .warningMessage, p").addClass(displayClass);
    $(".treePart > tbody > tr > td:not(:nth-child(3), .bom_spec, :nth-child(4))").addClass(displayClass);
    $(".treePart > tbody > tr > td:not(:nth-child(3), .bom_spec, :nth-child(4))").css({'cssText': paddingSide + '10px'});
    $("thead > tr > td > pre").addClass(displayClassCenter);



    if (($(window).width() < 800) && (window.docLanguage === "ar-SA")) {
        $("#TabDiv").css({'cssText': 'margin-right: 10% !important;'});

        $("#MiniDrawerDiv").css({'cssText': 'height: 200% !important;'});

    }

    if (($(window).width() < 800) && (window.docLanguage !== "ar-SA")) {
        $("#TabDiv").css({'cssText': 'margin-left: 10% !important;'});
        $("#MiniDrawerDiv").css({'cssText': 'height: 200% !important;'});
    }
}