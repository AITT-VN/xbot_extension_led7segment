Blockly.Blocks["xbot_led_7SEG_show_number"] = {
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
        { type: "input_value", name: "value", check: "Number"},
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
      tooltip: "Hiện số lên màn hình led 7 đoạn",
      helpUrl : ""
    });
  },
};

Blockly.Python['xbot_led_7SEG_show_number'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  Blockly.Python.definitions_['import_led_7SEG_display'] = 'from tm1637 import tm1637';
  var code = 'tm1637.number(' + dropdown_port + ', ' + value_text + ')\n';
  return code;
};

Blockly.Blocks["xbot_led_7SEG_show_text"] = {
  init: function () {
    this.jsonInit({
      colour: "#D31313",
      nextStatement: null,
      previousStatement: null,
      tooltip: "",
      message0: "%4 led 7 đoạn cổng %1 hiện chữ %2 %3",
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
        { type: "input_value", name: "value"},
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
      tooltip: "Hiện chữ lên màn hình led 7 đoạn",
      helpUrl : ""
    });
  },
};

Blockly.Python['xbot_led_7SEG_show_text'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  Blockly.Python.definitions_['import_led_7SEG_display'] = 'from tm1637 import tm1637';
  var code = 'tm1637.show(' + dropdown_port + ', ' + value_text + ')\n';
  return code;
};

Blockly.Blocks["xbot_led_7SEG_scroll"] = {
  init: function () {
    this.jsonInit({
      colour: "#D31313",
      nextStatement: null,
      previousStatement: null,
      tooltip: "",
      message0: "%4 led 7 đoạn cổng %1 chạy chữ %2 %3",
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
        { type: "input_value", name: "value"},
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
      tooltip: "Chạy dòng chữ lên màn hình led 7 đoạn",
      helpUrl : ""
    });
  },
};

Blockly.Python['xbot_led_7SEG_scroll'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  Blockly.Python.definitions_['import_led_7SEG_display'] = 'from tm1637 import tm1637';
  var code = 'tm1637.scroll(' + dropdown_port + ', ' + value_text + ')\n';
  return code;
};

Blockly.Blocks["xbot_led_7SEG_temperature"] = {
  init: function () {
    this.jsonInit({
      colour: "#D31313",
      nextStatement: null,
      previousStatement: null,
      tooltip: "",
      message0: "%4 led 7 đoạn cổng %1 hiện nhiệt độ %2 %3",
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
        { type: "input_value", name: "value", check: "Number"},
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
      tooltip: "Hiện nhiệt độ lên màn hình led 7 đoạn",
      helpUrl : ""
    });
  },
};

Blockly.Python['xbot_led_7SEG_temperature'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  Blockly.Python.definitions_['import_led_7SEG_display'] = 'from tm1637 import tm1637';
  var code = 'tm1637.temperature(' + dropdown_port + ', ' + value_text + ')\n';
  return code;
};

Blockly.Blocks["xbot_led_7SEG_brightness"] = {
  init: function () {
    this.jsonInit({
      colour: "#D31313",
      nextStatement: null,
      previousStatement: null,
      tooltip: "",
      message0: "%4 led 7 đoạn cổng %1 thay đổi độ sáng %2 %3 (0-7)",
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
        { type: "input_value", name: "value", check: "Number"},
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
      tooltip: "Thay đổi độ sáng của màn hình led 7 đoạn",
      helpUrl : ""
    });
  },
};

Blockly.Python['xbot_led_7SEG_temperature'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var value_text = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_MEMBER);
  Blockly.Python.definitions_['import_led_7SEG_display'] = 'from tm1637 import tm1637';
  var code = 'tm1637.brightness(' + dropdown_port + ', ' + value_text + ')\n';
  return code;
};