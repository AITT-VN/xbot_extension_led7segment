Blockly.Blocks["xbot_led_7SEG_display"] = {
  init: function () {
    this.jsonInit({
      colour: "#D31313",
      nextStatement: null,
      previousStatement: null,
      tooltip: "",
      message0: "%4 led 7 đoạn cổng %1 hiện số %2 %3",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "0"],
            ["2", "1"],
            ["3", "2"],
            ["4", "3"],
            ["5", "4"],
            ["6", "5"],
          ],
        },
        {type: "input_value",name: "value"},
        { type: "input_dummy" },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/TL4KgqX/led7segment.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      helpUrl : ""
    });
  },
};

Blockly.Python['xbot_led_7SEG_display'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  var code = 'led_7segment.show(' + dropdown_port + ', ' + value_text + ')\n';
  return code;
};