/**
 *
 * (c) Copyright Ascensio System SIA 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/**
 * Modified by wangnw2005 2025-05-23
 */

// Example insert text into editors (different implementations)
 
(function(window, undefined){

    window.Asc.plugin.init = function(){   
        var selectionResultDiv =document.getElementById('selectionResult');
        window.Asc.plugin.executeMethod("GetSelectedText", [], function(text) { 
                console.log("选中的文本:", text);
                selectionResultDiv.innerText=text;  
                console.log("插入index.html div 元素的文本:", selectionResultDiv.innerText);  
         });        
    };
    window.Asc.plugin.button = function(id){
    };
})(window, undefined);
