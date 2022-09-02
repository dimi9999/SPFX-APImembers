var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { Persona, PersonaSize, PersonaPresence } from '@fluentui/react/lib/Persona';
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { Label } from '@fluentui/react/lib/Label';
import { Stack } from '@fluentui/react/lib/Stack';
import { TestImages } from '@fluentui/example-data';
export var PersonaBasicExample = function () {
    var _a = React.useState(true), renderDetails = _a[0], updateRenderDetails = _a[1];
    var onChange = function (ev, checked) {
        updateRenderDetails(!!checked);
    };
    var examplePersona = {
        imageUrl: TestImages.personaFemale,
        imageInitials: 'AL',
        text: 'Annie Lindqvist',
        secondaryText: 'Software Engineer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
    };
    return (React.createElement(Stack, { tokens: { childrenGap: 10 } },
        React.createElement(Checkbox, { label: "Include persona details", checked: renderDetails, 
            // eslint-disable-next-line react/jsx-no-bind
            onChange: onChange }),
        React.createElement(Label, null, "Size 8 Persona, with no presence"),
        React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size8, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, no presence detected" })),
        React.createElement(Label, null, "Size 8 Persona, with presence"),
        React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size8, presence: PersonaPresence.offline, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is offline" })),
        React.createElement(Label, null, "Size 24 Persona"),
        React.createElement(Persona, __assign({}, examplePersona, { text: "Annie Lindqvist (Available)", size: PersonaSize.size24, presence: PersonaPresence.online, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is online" })),
        React.createElement(Label, null, "Size 32 Persona"),
        React.createElement(Persona, __assign({}, examplePersona, { text: "Annie Lindqvist (Available)", size: PersonaSize.size32, presence: PersonaPresence.online, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is online" })),
        React.createElement(Label, null, "Size 40 Persona"),
        React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size40, presence: PersonaPresence.away, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is away" })),
        React.createElement(Label, null, "Size 48 Persona (default) "),
        React.createElement(Persona, __assign({}, examplePersona, { hidePersonaDetails: !renderDetails, presence: PersonaPresence.busy, imageAlt: "Annie Lindqvist, status is busy" })),
        React.createElement(Label, null, "Size 56 Persona (default) "),
        React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size56, hidePersonaDetails: !renderDetails, presence: PersonaPresence.online, imageAlt: "Annie Lindqvist, status is online" })),
        React.createElement(Label, null, "Size 72 Persona"),
        React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, presence: PersonaPresence.dnd, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is dnd" })),
        React.createElement(Label, null, "Size 100 Persona"),
        React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size100, presence: PersonaPresence.blocked, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is blocked" })),
        React.createElement(Label, null, "Size 120 Persona"),
        React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size120, presence: PersonaPresence.away, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is away" }))));
};
var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.render = function () {
        var _a = React.useState(true), renderDetails = _a[0], updateRenderDetails = _a[1];
        var onChange = function (ev, checked) {
            updateRenderDetails(!!checked);
        };
        var examplePersona = {
            imageUrl: TestImages.personaFemale,
            imageInitials: 'AL',
            text: 'Annie Lindqvist',
            secondaryText: 'Software Engineer',
            tertiaryText: 'In a meeting',
            optionalText: 'Available at 4:00pm',
        };
        return (React.createElement(Stack, { tokens: { childrenGap: 10 } },
            React.createElement(Checkbox, { label: "Include persona details", checked: renderDetails, 
                // eslint-disable-next-line react/jsx-no-bind
                onChange: onChange }),
            React.createElement(Label, null, "Size 8 Persona, with no presence"),
            React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size8, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, no presence detected" })),
            React.createElement(Label, null, "Size 8 Persona, with presence"),
            React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size8, presence: PersonaPresence.offline, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is offline" })),
            React.createElement(Label, null, "Size 24 Persona"),
            React.createElement(Persona, __assign({}, examplePersona, { text: "Annie Lindqvist (Available)", size: PersonaSize.size24, presence: PersonaPresence.online, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is online" })),
            React.createElement(Label, null, "Size 32 Persona"),
            React.createElement(Persona, __assign({}, examplePersona, { text: "Annie Lindqvist (Available)", size: PersonaSize.size32, presence: PersonaPresence.online, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is online" })),
            React.createElement(Label, null, "Size 40 Persona"),
            React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size40, presence: PersonaPresence.away, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is away" })),
            React.createElement(Label, null, "Size 48 Persona (default) "),
            React.createElement(Persona, __assign({}, examplePersona, { hidePersonaDetails: !renderDetails, presence: PersonaPresence.busy, imageAlt: "Annie Lindqvist, status is busy" })),
            React.createElement(Label, null, "Size 56 Persona (default) "),
            React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size56, hidePersonaDetails: !renderDetails, presence: PersonaPresence.online, imageAlt: "Annie Lindqvist, status is online" })),
            React.createElement(Label, null, "Size 72 Persona"),
            React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size72, presence: PersonaPresence.dnd, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is dnd" })),
            React.createElement(Label, null, "Size 100 Persona"),
            React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size100, presence: PersonaPresence.blocked, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is blocked" })),
            React.createElement(Label, null, "Size 120 Persona"),
            React.createElement(Persona, __assign({}, examplePersona, { size: PersonaSize.size120, presence: PersonaPresence.away, hidePersonaDetails: !renderDetails, imageAlt: "Annie Lindqvist, status is away" }))));
    };
    return HelloWorld;
}(React.Component));
export default HelloWorld;
//# sourceMappingURL=HelloWorld.js.map