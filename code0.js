gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.idToCallbackMap = new Map();
gdjs.MainMenuCode.GDBackgroundObjects1= [];
gdjs.MainMenuCode.GDBackgroundObjects2= [];
gdjs.MainMenuCode.GDLogoObjects1= [];
gdjs.MainMenuCode.GDLogoObjects2= [];
gdjs.MainMenuCode.GDStartButtonObjects1= [];
gdjs.MainMenuCode.GDStartButtonObjects2= [];
gdjs.MainMenuCode.GDSettingsButtonObjects1= [];
gdjs.MainMenuCode.GDSettingsButtonObjects2= [];
gdjs.MainMenuCode.GDFAQButtonObjects1= [];
gdjs.MainMenuCode.GDFAQButtonObjects2= [];
gdjs.MainMenuCode.GDQuitButtonObjects1= [];
gdjs.MainMenuCode.GDQuitButtonObjects2= [];
gdjs.MainMenuCode.GDFadeScreenObjects1= [];
gdjs.MainMenuCode.GDFadeScreenObjects2= [];


gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.MainMenuCode.GDStartButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDFadeScreenObjects1Objects = Hashtable.newFrom({"FadeScreen": gdjs.MainMenuCode.GDFadeScreenObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.MainMenuCode.GDStartButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.MainMenuCode.GDStartButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDSettingsButtonObjects1Objects = Hashtable.newFrom({"SettingsButton": gdjs.MainMenuCode.GDSettingsButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDSettingsButtonObjects1Objects = Hashtable.newFrom({"SettingsButton": gdjs.MainMenuCode.GDSettingsButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDFAQButtonObjects1Objects = Hashtable.newFrom({"FAQButton": gdjs.MainMenuCode.GDFAQButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDFAQButtonObjects1Objects = Hashtable.newFrom({"FAQButton": gdjs.MainMenuCode.GDFAQButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuitButtonObjects1Objects = Hashtable.newFrom({"QuitButton": gdjs.MainMenuCode.GDQuitButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuitButtonObjects1Objects = Hashtable.newFrom({"QuitButton": gdjs.MainMenuCode.GDQuitButtonObjects1});
gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuitButtonObjects1Objects = Hashtable.newFrom({"QuitButton": gdjs.MainMenuCode.GDQuitButtonObjects1});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainMenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDStartButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FAQButton"), gdjs.MainMenuCode.GDFAQButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MainMenuCode.GDQuitButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MainMenuCode.GDSettingsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainMenuCode.GDStartButtonObjects1);
gdjs.MainMenuCode.GDFadeScreenObjects1.length = 0;

{gdjs.evtTools.sound.playMusic(runtimeScene, "Main Menu BGM.mp3", true, 60, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((( gdjs.MainMenuCode.GDStartButtonObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDStartButtonObjects1[0].getScaleX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber((( gdjs.MainMenuCode.GDFAQButtonObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDFAQButtonObjects1[0].getScaleX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.MainMenuCode.GDQuitButtonObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDQuitButtonObjects1[0].getScaleX()));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.MainMenuCode.GDSettingsButtonObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDSettingsButtonObjects1[0].getScaleX()));
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDFadeScreenObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeScreenObjects1[i].getBehavior("Resizable").setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeScreenObjects1[i].getBehavior("Resizable").setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeScreenObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeScreenObjects1[i].setZOrder(1000);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainMenuCode.GDStartButtonObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainMenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDStartButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 0.9);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainMenuCode.GDStartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDStartButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDStartButtonObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDStartButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) * 0.8);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeScreen"), gdjs.MainMenuCode.GDFadeScreenObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeScreenObjects1[i].getBehavior("Opacity").setOpacity(gdjs.MainMenuCode.GDFadeScreenObjects1[i].getBehavior("Opacity").getOpacity() + (510 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeScreen"), gdjs.MainMenuCode.GDFadeScreenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDFadeScreenObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDFadeScreenObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDFadeScreenObjects1[k] = gdjs.MainMenuCode.GDFadeScreenObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDFadeScreenObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MainMenuCode.GDSettingsButtonObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDSettingsButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MainMenuCode.GDSettingsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDSettingsButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSettingsButtonObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSettingsButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) * 0.9);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MainMenuCode.GDSettingsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDSettingsButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSettingsButtonObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSettingsButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) * 0.8);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FAQButton"), gdjs.MainMenuCode.GDFAQButtonObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDFAQButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFAQButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FAQButton"), gdjs.MainMenuCode.GDFAQButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDFAQButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDFAQButtonObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDFAQButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFAQButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) * 0.9);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FAQButton"), gdjs.MainMenuCode.GDFAQButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDFAQButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDFAQButtonObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDFAQButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFAQButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) * 0.8);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MainMenuCode.GDQuitButtonObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDQuitButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuitButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MainMenuCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuitButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDQuitButtonObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDQuitButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuitButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) * 0.9);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MainMenuCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuitButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDQuitButtonObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDQuitButtonObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuitButtonObjects1[i].getBehavior("Scale").setScale(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) * 0.8);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MainMenuCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuitButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeScreen"), gdjs.MainMenuCode.GDFadeScreenObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDFadeScreenObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDFadeScreenObjects1[i].getBehavior("Opacity").setOpacity(gdjs.MainMenuCode.GDFadeScreenObjects1[i].getBehavior("Opacity").getOpacity() + (510 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FadeScreen"), gdjs.MainMenuCode.GDFadeScreenObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDFadeScreenObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDFadeScreenObjects1[i].getBehavior("Opacity").getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDFadeScreenObjects1[k] = gdjs.MainMenuCode.GDFadeScreenObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDFadeScreenObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDLogoObjects1.length = 0;
gdjs.MainMenuCode.GDLogoObjects2.length = 0;
gdjs.MainMenuCode.GDStartButtonObjects1.length = 0;
gdjs.MainMenuCode.GDStartButtonObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsButtonObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsButtonObjects2.length = 0;
gdjs.MainMenuCode.GDFAQButtonObjects1.length = 0;
gdjs.MainMenuCode.GDFAQButtonObjects2.length = 0;
gdjs.MainMenuCode.GDQuitButtonObjects1.length = 0;
gdjs.MainMenuCode.GDQuitButtonObjects2.length = 0;
gdjs.MainMenuCode.GDFadeScreenObjects1.length = 0;
gdjs.MainMenuCode.GDFadeScreenObjects2.length = 0;

gdjs.MainMenuCode.eventsList0(runtimeScene);
gdjs.MainMenuCode.GDBackgroundObjects1.length = 0;
gdjs.MainMenuCode.GDBackgroundObjects2.length = 0;
gdjs.MainMenuCode.GDLogoObjects1.length = 0;
gdjs.MainMenuCode.GDLogoObjects2.length = 0;
gdjs.MainMenuCode.GDStartButtonObjects1.length = 0;
gdjs.MainMenuCode.GDStartButtonObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsButtonObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsButtonObjects2.length = 0;
gdjs.MainMenuCode.GDFAQButtonObjects1.length = 0;
gdjs.MainMenuCode.GDFAQButtonObjects2.length = 0;
gdjs.MainMenuCode.GDQuitButtonObjects1.length = 0;
gdjs.MainMenuCode.GDQuitButtonObjects2.length = 0;
gdjs.MainMenuCode.GDFadeScreenObjects1.length = 0;
gdjs.MainMenuCode.GDFadeScreenObjects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
