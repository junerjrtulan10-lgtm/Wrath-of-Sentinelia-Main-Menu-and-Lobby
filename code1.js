gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.idToCallbackMap = new Map();
gdjs.LobbyCode.GDLobbyBackgroundObjects1= [];
gdjs.LobbyCode.GDLobbyBackgroundObjects2= [];
gdjs.LobbyCode.GDPirateGuyObjects1= [];
gdjs.LobbyCode.GDPirateGuyObjects2= [];
gdjs.LobbyCode.GDPirateGirlObjects1= [];
gdjs.LobbyCode.GDPirateGirlObjects2= [];
gdjs.LobbyCode.GDBackButtonObjects1= [];
gdjs.LobbyCode.GDBackButtonObjects2= [];
gdjs.LobbyCode.GDContinueButtonObjects1= [];
gdjs.LobbyCode.GDContinueButtonObjects2= [];
gdjs.LobbyCode.GDCharacterSelectionObjects1= [];
gdjs.LobbyCode.GDCharacterSelectionObjects2= [];
gdjs.LobbyCode.GDFadeScreenObjects1= [];
gdjs.LobbyCode.GDFadeScreenObjects2= [];
gdjs.LobbyCode.GDSelectionBoxObjects1= [];
gdjs.LobbyCode.GDSelectionBoxObjects2= [];
gdjs.LobbyCode.GDNameClaudeObjects1= [];
gdjs.LobbyCode.GDNameClaudeObjects2= [];
gdjs.LobbyCode.GDNameDolaObjects1= [];
gdjs.LobbyCode.GDNameDolaObjects2= [];


gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDFadeScreenObjects1Objects = Hashtable.newFrom({"FadeScreen": gdjs.LobbyCode.GDFadeScreenObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.LobbyCode.GDBackButtonObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPirateGuyObjects1Objects = Hashtable.newFrom({"PirateGuy": gdjs.LobbyCode.GDPirateGuyObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPirateGirlObjects1Objects = Hashtable.newFrom({"PirateGirl": gdjs.LobbyCode.GDPirateGirlObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPirateGuyObjects1Objects = Hashtable.newFrom({"PirateGuy": gdjs.LobbyCode.GDPirateGuyObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPirateGirlObjects1Objects = Hashtable.newFrom({"PirateGirl": gdjs.LobbyCode.GDPirateGirlObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.LobbyCode.GDContinueButtonObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDContinueButtonObjects1Objects = Hashtable.newFrom({"ContinueButton": gdjs.LobbyCode.GDContinueButtonObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.LobbyCode.GDBackButtonObjects1});
gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.LobbyCode.GDBackButtonObjects1});
gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LobbyCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.LobbyCode.GDContinueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PirateGirl"), gdjs.LobbyCode.GDPirateGirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("PirateGuy"), gdjs.LobbyCode.GDPirateGuyObjects1);
gdjs.LobbyCode.GDFadeScreenObjects1.length = 0;

{gdjs.evtTools.sound.playMusic(runtimeScene, "Lobby BGM.mp3", true, 60, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.LobbyCode.GDPirateGuyObjects1.length === 0 ) ? 0 :gdjs.LobbyCode.GDPirateGuyObjects1[0].getScaleX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.LobbyCode.GDPirateGirlObjects1.length === 0 ) ? 0 :gdjs.LobbyCode.GDPirateGirlObjects1[0].getScaleX()));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDFadeScreenObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.LobbyCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDFadeScreenObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDFadeScreenObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDFadeScreenObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDFadeScreenObjects1[i].setZOrder(1000);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.LobbyCode.GDContinueButtonObjects1.length === 0 ) ? 0 :gdjs.LobbyCode.GDContinueButtonObjects1[0].getScaleX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber((( gdjs.LobbyCode.GDBackButtonObjects1.length === 0 ) ? 0 :gdjs.LobbyCode.GDBackButtonObjects1[0].getScaleX()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LobbyCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDBackButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PirateGuy"), gdjs.LobbyCode.GDPirateGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPirateGuyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PirateGirl"), gdjs.LobbyCode.GDPirateGirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPirateGirlObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PirateGirl"), gdjs.LobbyCode.GDPirateGirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("PirateGuy"), gdjs.LobbyCode.GDPirateGuyObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDPirateGuyObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDPirateGuyObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDPirateGirlObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDPirateGirlObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PirateGuy"), gdjs.LobbyCode.GDPirateGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPirateGuyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDPirateGuyObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDPirateGuyObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDPirateGuyObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 1.1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PirateGirl"), gdjs.LobbyCode.GDPirateGirlObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDPirateGirlObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDPirateGirlObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDPirateGirlObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDPirateGirlObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) * 1.1);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeScreen"), gdjs.LobbyCode.GDFadeScreenObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDFadeScreenObjects1[i].getBehavior("Opacity").setOpacity(gdjs.LobbyCode.GDFadeScreenObjects1[i].getBehavior("Opacity").getOpacity() - (765 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LobbyCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.LobbyCode.GDContinueButtonObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDContinueButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
{for(var i = 0, len = gdjs.LobbyCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDBackButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.LobbyCode.GDContinueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDContinueButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDContinueButtonObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDContinueButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) * 0.9);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.LobbyCode.GDContinueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDContinueButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDContinueButtonObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDContinueButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) * 0.8);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LobbyCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDBackButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDBackButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) * 0.9);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.LobbyCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LobbyCode.mapOfGDgdjs_9546LobbyCode_9546GDBackButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDBackButtonObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDBackButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) * 0.8);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeScreen"), gdjs.LobbyCode.GDFadeScreenObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDFadeScreenObjects1[i].getBehavior("Opacity").setOpacity(gdjs.LobbyCode.GDFadeScreenObjects1[i].getBehavior("Opacity").getOpacity() + (510 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeScreen"), gdjs.LobbyCode.GDFadeScreenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDFadeScreenObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDFadeScreenObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDFadeScreenObjects1[k] = gdjs.LobbyCode.GDFadeScreenObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDFadeScreenObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDLobbyBackgroundObjects1.length = 0;
gdjs.LobbyCode.GDLobbyBackgroundObjects2.length = 0;
gdjs.LobbyCode.GDPirateGuyObjects1.length = 0;
gdjs.LobbyCode.GDPirateGuyObjects2.length = 0;
gdjs.LobbyCode.GDPirateGirlObjects1.length = 0;
gdjs.LobbyCode.GDPirateGirlObjects2.length = 0;
gdjs.LobbyCode.GDBackButtonObjects1.length = 0;
gdjs.LobbyCode.GDBackButtonObjects2.length = 0;
gdjs.LobbyCode.GDContinueButtonObjects1.length = 0;
gdjs.LobbyCode.GDContinueButtonObjects2.length = 0;
gdjs.LobbyCode.GDCharacterSelectionObjects1.length = 0;
gdjs.LobbyCode.GDCharacterSelectionObjects2.length = 0;
gdjs.LobbyCode.GDFadeScreenObjects1.length = 0;
gdjs.LobbyCode.GDFadeScreenObjects2.length = 0;
gdjs.LobbyCode.GDSelectionBoxObjects1.length = 0;
gdjs.LobbyCode.GDSelectionBoxObjects2.length = 0;
gdjs.LobbyCode.GDNameClaudeObjects1.length = 0;
gdjs.LobbyCode.GDNameClaudeObjects2.length = 0;
gdjs.LobbyCode.GDNameDolaObjects1.length = 0;
gdjs.LobbyCode.GDNameDolaObjects2.length = 0;

gdjs.LobbyCode.eventsList0(runtimeScene);
gdjs.LobbyCode.GDLobbyBackgroundObjects1.length = 0;
gdjs.LobbyCode.GDLobbyBackgroundObjects2.length = 0;
gdjs.LobbyCode.GDPirateGuyObjects1.length = 0;
gdjs.LobbyCode.GDPirateGuyObjects2.length = 0;
gdjs.LobbyCode.GDPirateGirlObjects1.length = 0;
gdjs.LobbyCode.GDPirateGirlObjects2.length = 0;
gdjs.LobbyCode.GDBackButtonObjects1.length = 0;
gdjs.LobbyCode.GDBackButtonObjects2.length = 0;
gdjs.LobbyCode.GDContinueButtonObjects1.length = 0;
gdjs.LobbyCode.GDContinueButtonObjects2.length = 0;
gdjs.LobbyCode.GDCharacterSelectionObjects1.length = 0;
gdjs.LobbyCode.GDCharacterSelectionObjects2.length = 0;
gdjs.LobbyCode.GDFadeScreenObjects1.length = 0;
gdjs.LobbyCode.GDFadeScreenObjects2.length = 0;
gdjs.LobbyCode.GDSelectionBoxObjects1.length = 0;
gdjs.LobbyCode.GDSelectionBoxObjects2.length = 0;
gdjs.LobbyCode.GDNameClaudeObjects1.length = 0;
gdjs.LobbyCode.GDNameClaudeObjects2.length = 0;
gdjs.LobbyCode.GDNameDolaObjects1.length = 0;
gdjs.LobbyCode.GDNameDolaObjects2.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
