interface BasePopupButton {
  /**
   * Identifier of the button, 0-64 characters. Set to empty string by
   * default.
   *
   * If the button is pressed, its *id* is returned in the callback and the
   * *popupClosed* event.
   */
  id?: string
}

interface DefaultDestructivePopupButton extends BasePopupButton {
  /**
   * Type of the button. Set to *default* by default.
   *
   * Can be one of these values:
   * - *default*, a button with the default style,
   * - *destructive*, a button with a style that indicates a destructive action (e.g.
   * “Remove”, “Delete”, etc.).
   */
  type?: 'default' | 'destructive'
  /**
   * The text to be displayed on the button, 0-64 characters.
   */
  text: string
}

interface OkCloseCancelPopupButton extends BasePopupButton {
  /**
   * Type of the button.
   *
   * Can be one of these values:
   * - *ok*, a button with the localized text “OK”,
   * - *close*, a button with the localized text “Close”,
   * - *cancel*, a button with the localized text “Cancel”.
   */
  type: 'ok' | 'close' | 'cancel'
}

export declare namespace TelegramWebApps {
  /**
   * To connect your Web App to the Telegram client, place the script telegram-web-app.js
   * in the `<head>` tag before any other scripts, using this code:
   * ```html
   * <script src="https://telegram.org/js/telegram-web-app.js"></script>
   * ```
   * Once the script is connected, a `window.Telegram.WebApp` object will become available
   * with the following fields
   */
  interface WebApp {
    /**
     * 	A string with raw data transferred to the Web App, convenient for validating data.
     *
     *  **WARNING:** Validate data from this field before using it on the bot's server.
     */
    readonly initData: string
    /**
     * An object with input data transferred to the Web App.
     *
     * **WARNING:** Data from this field should not be trusted. You should only use data
     * from initData on the bot's server and only after it has been validated.
     */
    readonly initDataUnsafe: WebAppInitData
    /**
     * The version of the Bot API available in the user's Telegram app.
     */
    readonly version: string
    /**
     * 	The name of the platform of the user's Telegram app.
     */
    readonly platform:
      | 'android'
      | 'android_x'
      | 'ios'
      | 'macos'
      | 'tdesktop'
      | 'weba'
      | 'webk'
      | 'unigram'
      | 'unknown'
    /**
     * The color scheme currently used in the Telegram app.
     *
     * Also available as the CSS variable `var(--tg-color-scheme)`.
     */
    readonly colorScheme: ColorScheme
    /**
     * 	An object containing the current theme settings used in the Telegram app.
     */
    readonly themeParams: ThemeParams
    /**
     * *True*, if the Web App is expanded to the maximum available height. *False*, if the
     * Web App occupies part of the screen and can be expanded to the full height using
     * the **expand()** method.
     */
    readonly isExpanded: string
    /**
     * The current height of the visible area of the Web App. Also available in CSS as
     * the variable `var(--tg-viewport-height)`.
     *
     * The application can display just the top part of the Web App, with its lower part
     * remaining outside the screen area. From this position, the user can “pull” the Web
     * App to its maximum height, while the bot can do the same by calling the
     * **expand()** method. As the position of the Web App changes, the current height
     * value of the visible area will be updated in real time.
     *
     * Please note that the refresh rate of this value is not sufficient to smoothly
     * follow the lower border of the window. It should not be used to pin interface
     * elements to the bottom of the visible area. It's more appropriate to use the value
     * of the `viewportStableHeight` field for this purpose.
     */
    readonly viewportHeight: number
    /**
     * The height of the visible area of the Web App in its last stable state. Also
     * available in CSS as a variable `var(--tg-viewport-stable-height)`.
     *
     * The application can display just the top part of the Web App, with its lower part
     * remaining outside the screen area. From this position, the user can “pull” the Web
     * App to its maximum height, while the bot can do the same by calling the
     * **expand()** method. Unlike the value of `viewportHeight`, the value of
     * `viewportStableHeight` does not change as the position of the Web App changes with
     * user gestures or during animations. The value of `viewportStableHeight` will be
     * updated after all gestures and animations are completed and the Web App reaches its
     * final size.
     *
     * *Note the event `viewportChanged` with the passed parameter `isStateStable=true`,
     * which will allow you to track when the stable state of the height of the visible
     * area changes.*
     */
    readonly viewportStableHeight: number
    /**
     * Current header color in the `#RRGGBB` format.
     */
    readonly headerColor: string
    /**
     * Current background color in the `#RRGGBB` format.
     */
    readonly backgroundColor: string
    /**
     * *True*, if the confirmation dialog is enabled while the user is trying to close the
     * Web App. *False*, if the confirmation dialog is disabled.
     */
    readonly isClosingConfirmationEnabled: boolean
    /**
     * An object for controlling the back button which can be displayed in the header of
     * the Web App in the Telegram interface.
     */
    readonly BackButton: BackButton
    /**
     * An object for controlling the main button, which is displayed at the bottom of the
     * Web App in the Telegram interface.
     */
    readonly MainButton: MainButton
    /**
     * An object for controlling the Settings item in the context menu of the Mini App in
     * the Telegram interface.
     */
    readonly SettingsButton: SettingsButton
    /**
     * An object for controlling haptic feedback.
     */
    readonly HapticFeedback: HapticFeedback
    /**
     * An object for controlling cloud storage.
     */
    readonly CloudStorage: CloudStorage
    /**
     * An object for controlling biometrics on the device.
     */
    readonly BiometricManager: BiometricManager
    /**
     * Returns true if the user's app supports a version of the Bot API that is equal to
     * or higher than the version passed as the parameter.
     */
    isVersionAtLeast(version: string): boolean
    /**
     * `Bot API 6.1+` A method that sets the app header color in the `#RRGGBB` format. You
     * can also use keywords *bg_color* and *secondary_bg_color*.
     *
     * Up to `Bot API 6.9` You can only pass *Telegram.WebApp.themeParams.bg_color* or
     * *Telegram.WebApp.themeParams.secondary_bg_color* as a color or *bg_color*,
     * *secondary_bg_color* keywords.
     */
    setHeaderColor(color: string): void
    /**
     * `Bot API 6.1+` A method that sets the app background color in the `#RRGGBB` format
     * or you can use keywords *bg_color*, *secondary_bg_color* instead.
     */
    setBackgroundColor(color: string): void
    /**
     * `Bot API 6.2+` A method that enables a confirmation dialog while the user is trying
     * to close the Web App.
     */
    enableClosingConfirmation(): void
    /**
     * `Bot API 6.2+` A method that disables the confirmation dialog while the user is
     * trying to close the Web App.
     */
    disableClosingConfirmation(): void
    /**
     * A method that sets the app event handler.
     *
     * Event occurs whenever theme settings are changed in the user's Telegram app (including
     * switching to night mode).
     *
     * *eventHandler* receives no parameters, new theme settings and color scheme can be
     * received via *this.themeParams* and *this.colorScheme* respectively.
     */
    onEvent(
      eventType: 'themeChanged',
      eventHandler: (this: { themeParams: ThemeParams; colorScheme: ColorScheme }) => void
    ): void
    /**
     * A method that sets the app event handler.
     *
     * Event occurs when the visible section of the Web App is changed.
     *
     * *eventHandler* receives an object with the single field *isStateStable*. If
     * *isStateStable* is true, the resizing of the Web App is finished. If it is false,
     * the resizing is ongoing (the user is expanding or collapsing the Web App or an
     * animated object is playing). The current value of the visible section’s height is
     * available in *this.viewportHeight*.
     */
    onEvent(eventType: 'viewportChanged', eventHandler: ViewportChangedEventHandler): void
    /**
     * A method that sets the app event handler.
     *
     * Event occurs when the main button is pressed.
     */
    onEvent(eventType: 'mainButtonClicked', eventHandler: () => void): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.1+` Event occurrs when the back button is pressed.
     */
    onEvent(eventType: 'backButtonClicked', eventHandler: () => void): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.1+` Event occurrs when the Settings item in context menu is pressed.
     */
    onEvent(eventType: 'settingsButtonClicked', eventHandler: () => void): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.1+` Event occurrs when the opened invoice is closed.
     *
     * *eventHandler* receives an object with the two fields: *url* – invoice link
     * provided and *status* – one of the invoice statuses:
     * - **paid** – invoice was paid successfully,
     * - **cancelled** – user closed this invoice without paying,
     * - **failed** – user tried to pay, but the payment was failed,
     * - **pending** – the payment is still processing. The bot will receive a service
     * message about a successful payment when the payment is successfully paid.
     */
    onEvent(eventType: 'invoiceClosed', eventHandler: InvoiceClosedEventHandler): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.2+` Event occurrs when the opened popup is closed.
     *
     * *eventHandler* receives an object with the single field *button_id* – the value of
     * the field *id* of the pressed button. If no buttons were pressed, the field
     * *button_id* will be *null*.
     */
    onEvent(eventType: 'popupClosed', eventHandler: PopupClosedEventHandler): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.4+` Event occurs when the QR code scanner catches a code with text data.
     *
     * *eventHandler* receives an object with the single field *data* containing text data
     * from the QR code.
     */
    onEvent(eventType: 'qrTextReceived', eventHandler: QrTextReceivedEventHandler): void
    /**
     * `Bot API 7.7+` Occurs when the QR code scanner popup is closed by the user.
     *
     * *eventHandler* receives no parameters.
     */
    onEvent(eventType: 'scanQrPopupClosed', eventHandler: () => void): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.4+` Event occurrs when the `readTextFromClipboard` method is called.
     *
     * *eventHandler* receives an object with the single field *data* containing text data
     * from the clipboard. If the clipboard contains non-text data, the field *data* will
     * be an empty string. If the Web App has no access to the clipboard, the field *data*
     * will be *null*.
     */
    onEvent(
      eventType: 'clipboardTextReceived',
      eventHandler: ClipboardTextReceivedEventHandler
    ): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.9+` Occurs when the write permission was requested.
     *
     * *eventHandler* receives an object with the single field *status* containing one of
     * the statuses:
     * - **allowed** – user granted write permission to the bot,
     * - **cancelled** – user declined this request.
     */
    onEvent(
      eventType: 'writeAccessRequested',
      eventHandler: (status: 'allowed' | 'cancelled') => void
    ): void
    /**
     * A method that sets the app event handler.
     *
     * `Bot API 6.9+` Occurrs when the user's phone number was requested.
     *
     * *eventHandler* receives an object with the single field status containing one of
     * the statuses:
     * - **sent** – user shared their phone number with the bot,
     * - **cancelled** – user declined this request.
     */
    onEvent(
      eventType: 'contactRequested',
      eventHandler: (status: 'sent' | 'cancelled') => void
    ): void
    /**
     * `Bot API 7.2+` Occurs whenever `BiometricManager` object is changed
     *
     * *eventHandler* receives no parameters.
     */
    onEvent(eventType: 'biometricManagerUpdated', eventHandler: () => void): void
    /**
     * 	`Bot API 7.2+` Occurs whenever biometric authentication was requested.
     *
     * *eventHandler* receives an object with the field *isAuthenticated* containing a
     * boolean indicating whether the user was authenticated successfully. If
     * *isAuthenticated* is true, the field *biometricToken() will contain the biometric
     * token stored in secure storage on the device.
     */
    onEvent(
      eventType: 'biometricAuthRequested',
      eventHandler: BiometricAuthRequestedEventHandler
    ): void
    /**
     * `Bot API 7.2+` Occurs whenever the biometric token was updated.
     *
     * *eventHandler* receives an object with the single field *isUpdated*, containing a
     * boolean indicating whether the token was updated.
     */
    onEvent(
      eventType: 'biometricTokenUpdated',
      eventHandler: BiometricTokenUpdatedEventHandler
    ): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(
      eventType:
        | 'themeChanged'
        | 'mainButtonClicked'
        | 'backButtonClicked'
        | 'settingsButtonClicked'
        | 'biometricManagerUpdated',
      eventHandler: () => void
    ): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(
      eventType: 'viewportChanged',
      eventHandler: ViewportChangedEventHandler
    ): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(eventType: 'invoiceClosed', eventHandler: InvoiceClosedEventHandler): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(eventType: 'popupClosed', eventHandler: PopupClosedEventHandler): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(eventType: 'qrTextReceived', eventHandler: QrTextReceivedEventHandler): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(
      eventType: 'clipboardTextReceived',
      eventHandler: ClipboardTextReceivedEventHandler
    ): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(
      eventType: 'biometricAuthRequested',
      eventHandler: BiometricAuthRequestedEventHandler
    ): void
    /**
     * A method that deletes a previously set event handler.
     */
    offEvent(
      eventType: 'biometricTokenUpdated',
      eventHandler: BiometricTokenUpdatedEventHandler
    ): void
    /**
     * A method used to send data to the bot. When this method is called, a service
     * message is sent to the bot containing the data *data* of the length up to 4096
     * bytes, and the Web App is closed. See the field *web_app_data* in the class
     * Message.
     *
     * *This method is only available for Web Apps launched via a Keyboard button.*
     */
    sendData(data: string): void
    /**
     * `Bot API 6.7+` A method that inserts the bot's username and the specified inline
     * *query* in the current chat's input field. Query may be empty, in which case only
     * the bot's username will be inserted. If an optional *choose_chat_types* parameter
     * was passed, the client prompts the user to choose a specific chat, then opens that
     * chat and inserts the bot's username and the specified inline query in the input
     * field. You can specify which types of chats the user will be able to choose from.
     */
    switchInlineQuery(
      query: string,
      choose_chat_types?: ('users' | 'bots' | 'groups' | 'channels')[]
    ): void
    /**
     * A method that opens a link in an external browser. The Web App will *not* be
     * closed.
     *
     * `Bot API 6.4+` If the optional *options* parameter is passed with the field
     * *try_instant_view=true*, the link will be opened in Instant View mode if possible.
     *
     * *Note that this method can be called only in response to user interaction with the
     * Web App interface (e.g. a click inside the Web App or on the main button)*
     */
    openLink(url: string, options?: { try_instant_view: boolean }): void
    /**
     * A method that opens a telegram link inside Telegram app. The Web App *will* be
     * closed.
     */
    openTelegramLink(url: string): void
    /**
     * `Bot API 6.1+` A method that opens an invoice using the link *url*. The Web App
     * will receive the event *invoiceClosed* when the invoice is closed. If an optional
     * *callback* parameter was passed, the *callback* function will be called and the
     * invoice status will be passed as the first argument.
     */
    openInvoice(url: string, callback?: InvoiceClosedEventHandler): void
    /**
     * `Bot API 6.2+` A method that shows a native popup described by the *params*
     * argument of the type PopupParams. The Web App will receive the event *popupClosed*
     * when the popup is closed. If an optional *callback* parameter was passed, the
     * *callback* function will be called and the field *id* of the pressed button will be
     * passed as the first argument.
     */
    showPopup(params: PopupParams, callback?: (id: string) => void): void
    /**
     * `Bot API 6.2+` A method that shows *message* in a simple alert with a 'Close'
     * button. If an optional *callback* parameter was passed, the *callback* function
     * will be called when the popup is closed.
     */
    showAlert(message: string, callback?: () => void): void
    /**
     * `Bot API 6.2+` A method that shows *message* in a simple confirmation window with
     * 'OK' and 'Cancel' buttons. If an optional *callback* parameter was passed, the
     * *callback* function will be called when the popup is closed and the first argument
     * will be a boolean indicating whether the user pressed the 'OK' button.
     */
    showConfirm(message: string, callback?: (okPressed: boolean) => void): void
    /**
     * `Bot API 6.4+` A method that shows a native popup for scanning a QR code described
     * by the *params* argument of the type ScanQrPopupParams. The Mini App will receive
     * the event *qrTextReceived* every time the scanner catches a code with text data. If
     * an optional *callback* parameter was passed, the *callback* function will be called
     * and the text from the QR code will be passed as the first argument. Returning
     * *true* inside this callback function causes the popup to be closed. Starting from
     * `Bot API 7.7`, the Mini App will receive the *scanQrPopupClosed* event if the user
     * closes the native popup for scanning a QR code.
     */
    showScanQrPopup(params: ScanQrPopupParams, callback?: (data: string) => boolean): void
    /**
     * `Bot API 6.4+` A method that closes the native popup for scanning a QR code opened
     * with the *showScanQrPopup* method. Run it if you received valid data in the event
     * *qrTextReceived*.
     */
    closeScanQrPopup(): void
    /**
     * `Bot API 6.4+` A method that requests text from the clipboard. The Web App will
     * receive the event *clipboardTextReceived*. If an optional *callback* parameter was
     * passed, the *callback* function will be called and the text from the clipboard will
     * be passed as the first argument.
     *
     * *Note: this method can be called only for Web Apps launched from the attachment
     * menu and only in response to a user interaction with the Web App interface (e.g. a
     * click inside the Web App or on the main button).*
     */
    readTextFromClipboard(callback?: (text: string) => void): void
    /**
     * `Bot API 6.9+` A method that shows a native popup requesting permission for the bot
     * to send messages to the user. If an optional *callback* parameter was passed, the
     * *callback* function will be called when the popup is closed and the first argument
     * will be a boolean indicating whether the user granted this access.
     */
    requestWriteAccess(callback?: (accessGranted: boolean) => void): void
    /**
     * `Bot API 6.9+` A method that shows a native popup prompting the user for their
     * phone number. If an optional *callback* parameter was passed, the *callback*
     * function will be called when the popup is closed and the first argument will be a
     * boolean indicating whether the user shared its phone number.
     */
    requestContact(callback?: (phoneNumberShared: boolean) => void): void
    /**
     * A method that informs the Telegram app that the Web App is ready to be displayed.
     *
     * It is recommended to call this method as early as possible, as soon as all
     * essential interface elements are loaded. Once this method is called, the loading
     * placeholder is hidden and the Web App is shown.
     *
     * If the method is not called, the placeholder will be hidden only when the page is
     * fully loaded.
     */
    ready(): boolean
    /**
     * A method that expands the Web App to the maximum available height. To find out if
     * the Web App is expanded to the maximum height, refer to the value of the
     * *Telegram.WebApp.isExpanded* parameter
     */
    expand(): void
    /**
     * A method that closes the Web App.
     */
    close(): void
    /**
     * *True*, if vertical swipes to close or minimize the Mini App are enabled. *False*,
     * if vertical swipes to close or minimize the Mini App are disabled. In any case, the
     * user will still be able to minimize and close the Mini App by swiping the Mini
     * App's header.
     */
    readonly isVerticalSwipesEnabled: boolean
    /**
     * `Bot API 7.7+` A method that enables vertical swipes to close or minimize the Mini
     * App. For user convenience, it is recommended to always enable swipes unless they
     * conflict with the Mini App's own gestures.
     */
    enableVerticalSwipes(): void
    /**
     * `Bot API 7.7+` A method that disables vertical swipes to close or minimize the Mini
     * App. This method is useful if your Mini App uses swipe gestures that may conflict
     * with the gestures for minimizing and closing the app.
     */
    disableVerticalSwipes(): void
  }

  /**
   * Web Apps can adjust the appearance of the interface to match the Telegram user's app
   * in real time. This object contains the user's current theme settings
   */
  interface ThemeParams {
    /**
     * Background color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-bg-color)`.
     */
    bg_color?: string
    /**
     * Main text color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-text-color)`.
     */
    text_color: string
    /**
     * Hint text color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-hint-color)`.
     */
    hint_color?: string
    /**
     * Link color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-link-color)`.
     */
    link_color?: string
    /**
     * Button color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-button-color)`.
     */
    button_color?: string
    /**
     * Button text color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-button-text-color)`.
     */
    button_text_color?: string
    /**
     * `Bot API 6.1+` Secondary background color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-secondary-bg-color)`.
     */
    secondary_bg_color?: string
    /**
     * `Bot API 7.0+` Header background color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-header-bg-color)`.
     */
    header_bg_color?: string
    /**
     * `Bot API 7.0+` Accent text color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-accent-text-color)`.
     */
    accent_text_color?: string
    /**
     * `Bot API 7.0+` Background color for the section in the `#RRGGBB` format. It is
     * recommended to use this in conjunction with *secondary_bg_color*.
     *
     * Also available as the CSS variable `var(--tg-theme-section-bg-color)`.
     */
    section_bg_color?: string
    /**
     * `Bot API 7.0+` Header text color for the section in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-section-header-text-color)`.
     */
    section_header_text_color?: `#${string}`
    /**
     * `Bot API 7.6+` Section separator color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-section-separator-color)`.
     */
    section_separator_color?: `#${string}`
    /**
     * `Bot API 7.0+` Subtitle text color in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-subtitle-text-color)`.
     */
    subtitle_text_color?: string
    /**
     * `Bot API 7.0+` Text color for destructive actions in the `#RRGGBB` format.
     *
     * Also available as the CSS variable `var(--tg-theme-destructive-text-color)`.
     */
    destructive_text_color?: string
  }

  /**
   * This object describes the native popup.
   */
  interface PopupParams {
    /**
     * The text to be displayed in the popup title, 0-64 characters.
     */
    title?: string
    /**
     * The message to be displayed in the body of the popup, 1-256 characters.
     */
    message: string
    /**
     * List of buttons to be displayed in the popup, 1-3 buttons. Set to
     * *[{“type”:“close”}]* by default.
     */
    buttons: PopupButton[]
  }

  /**
   * This object describes the native popup for scanning QR codes.
   */
  interface ScanQrPopupParams {
    /**
     * The text to be displayed under the 'Scan QR' heading, 0-64 characters.
     */
    text?: string
  }

  /**
   * This object describes the native popup button.
   */
  type PopupButton = DefaultDestructivePopupButton | OkCloseCancelPopupButton

  /**
   * This object controls the back button, which can be displayed in the header of the Web
   * App in the Telegram interface.
   */
  interface BackButton {
    /**
     * Shows whether the button is visible. Set to *false* by default.
     */
    isVisible: boolean
    /**
     * `Bot API 6.1+` A method that sets the button press event handler. An alias for
     * `Telegram.WebApp.onEvent('backButtonClicked', callback)`
     */
    onClick(callback: () => void): BackButton
    /**
     * `Bot API 6.1+` A method that removes the button press event handler. An alias for
     * `Telegram.WebApp.offEvent('backButtonClicked', callback)`
     */
    offClick(callback: () => void): BackButton
    /**
     * `Bot API 6.1+` A method to make the button active and visible.
     */
    show(): BackButton
    /**
     * `Bot API 6.1+` A method to hide the button.
     */
    hide(): BackButton
  }

  /**
   * This object controls the main button, which is displayed at the bottom of the Web App
   * in the Telegram interface.
   */
  interface MainButton {
    /**
     * Current button text. Set to *CONTINUE* by default.
     */
    text: string
    /**
     * Current button color. Set to *themeParams.button_color* by default.
     */
    color: string
    /**
     * Current button text color. Set to *themeParams.button_text_color* by default.
     */
    textColor: string
    /**
     * Shows whether the button is visible. Set to *false* by default.
     */
    isVisible: boolean
    /**
     * 	Shows whether the button is active. Set to *true* by default.
     */
    isActive: boolean
    /**
     * Shows whether the button is displaying a loading indicator.
     */
    readonly isProgressVisible: boolean
    /**
     * A method to set the button text.
     */
    setText(text: string): MainButton
    /**
     * A method that sets the button press event handler. An alias for
     * `Telegram.WebApp.onEvent('mainButtonClicked', callback)`
     */
    onClick(callback: () => void): MainButton
    /**
     * A method that removes the button press event handler. An alias for
     * `Telegram.WebApp.offEvent('mainButtonClicked', callback)`
     */
    offClick(callback: () => void): MainButton
    /**
     * A method to make the button visible.
     *
     * *Note that opening the Web App from the attachment menu hides the main button until
     * the user interacts with the Web App interface.*
     */
    show(): MainButton
    /**
     * A method to hide the button.
     */
    hide(): MainButton
    /**
     * A method to enable the button.
     */
    enable(): MainButton
    /**
     * A method to disable the button.
     */
    disable(): MainButton
    /**
     * A method to show a loading indicator on the button.
     *
     * It is recommended to display loading progress if the action tied to the button may
     * take a long time. By default, the button is disabled while the action is in
     * progress. If the parameter `leaveActive=true` is passed, the button remains
     * enabled.
     */
    showProgress(leaveActive?: boolean): MainButton
    /**
     * A method to hide the loading indicator.
     */
    hideProgress(): MainButton
    /**
     * A method to set the button parameters. The params parameter is an object containing
     * one or several fields that need to be changed:
     *
     * **text** - button text;
     *
     * **color** - button color;
     *
     * **text_color** - button text color;
     *
     * **is_active** - enable the button;
     *
     * **is_visible** - show the button.
     */
    setParams(params: {
      text?: string
      color?: string
      text_color?: string
      is_active?: boolean
      is_visible?: boolean
    }): MainButton
  }

  /**
   * This object controls the Settings item in the context menu of the Mini App in the
   * Telegram interface.
   */
  interface SettingsButton {
    /**
     * Shows whether the context menu item is visible. Set to **false** by default.
     */
    isVisible: boolean
    /**
     * `Bot API 7.0+` A method that sets the press event handler for the Settings item in
     * the context menu. An alias for
     * `Telegram.WebApp.onEvent('settingsButtonClicked', callback)`
     */
    onClick(callback: () => void): SettingsButton
    /**
     * `Bot API 7.0+` A method that removes the press event handler from the Settings item
     * in the context menu. An alias for
     * `Telegram.WebApp.offEvent('settingsButtonClicked', callback)`
     */
    offClick(callback: () => void): SettingsButton
    /**
     * `Bot API 7.0+` A method to make the Settings item in the context menu visible.
     */
    show(): SettingsButton
    /**
     * `Bot API 7.0+` A method to hide the Settings item in the context menu.
     */
    hide(): SettingsButton
  }

  /**
   * This object controls haptic feedback.
   */
  interface HapticFeedback {
    /**
     * `Bot API 6.1+` A method tells that an impact occurred. The Telegram app may play
     * the appropriate haptics based on style value passed. Style can be one of these
     * values:
     * - *light*, indicates a collision between small or lightweight UI objects,
     * - *medium*, indicates a collision between medium-sized or medium-weight UI objects,
     * - *heavy*, indicates a collision between large or heavyweight UI objects,
     * - *rigid*, indicates a collision between hard or inflexible UI objects,
     * - *soft*, indicates a collision between soft or flexible UI objects.
     */
    impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): HapticFeedback
    /**
     * `Bot API 6.1+` A method tells that a task or action has succeeded, failed, or
     * produced a warning. The Telegram app may play the appropriate haptics based on type
     * value passed. Type can be one of these values:
     * - *error*, indicates that a task or action has failed,
     * - *success*, indicates that a task or action has completed successfully,
     * - *warning*, indicates that a task or action produced a warning.
     */
    notificationOccurred(type: 'error' | 'success' | 'warning'): HapticFeedback
    /**
     * `Bot API 6.1+` A method tells that the user has changed a selection. The Telegram
     * app may play the appropriate haptics.
     *
     * *Do not use this feedback when the user makes or confirms a selection; use it only
     * when the selection changes.*
     */
    selectionChanged(): HapticFeedback
  }

  /**
   * This object controls the cloud storage. Each bot can store up to 1024 items per user
   * in the cloud storage.
   */
  interface CloudStorage {
    /**
     * `Bot API 6.9+` A method that stores a value in the cloud storage using the
     * specified key. The key should contain 1-128 characters, only `A-Z`, `a-z`, `0-9`,
     * `_` and `-` are allowed. The value should contain 0-4096 characters. You can store
     * up to 1024 keys in the cloud storage. If an optional *callback* parameter was
     * passed, the *callback* function will be called. In case of an error, the first
     * argument will contain the error. In case of success, the first argument will be
     * *null* and the second argument will be a boolean indicating whether the value was
     * stored.
     */
    setItem(
      key: string,
      value: string,
      callback?: ((error: Error) => void) | ((error: null, valueStored: boolean) => void)
    ): CloudStorage
    /**
     * `Bot API 6.9+` A method that receives a value from the cloud storage using the
     * specified key. The key should contain 1-128 characters, only `A-Z`, `a-z`, `0-9`,
     * `_` and `-` are allowed. In case of an error, the *callback* function will be
     * called and the first argument will contain the error. In case of success, the first
     * argument will be *null* and the value will be passed as the second argument.
     */
    getItem(
      key: string,
      callback: ((error: Error) => void) | ((error: null, value: string) => void)
    ): CloudStorage
    /**
     * `Bot API 6.9+` A method that receives values from the cloud storage using the
     * specified keys. The keys should contain 1-128 characters, only `A-Z`, `a-z`, `0-9`,
     * `_` and `-` are allowed. In case of an error, the *callback* function will be
     * called and the first argument will contain the error. In case of success, the first
     * argument will be *null* and the values will be passed as the second argument.
     */
    getItems(
      keys: string[],
      callback: ((error: Error) => void) | ((error: null, values: string[]) => void)
    ): CloudStorage
    /**
     * `Bot API 6.9+` A method that removes a value from the cloud storage using the
     * specified key. The key should contain 1-128 characters, only `A-Z`, `a-z`, `0-9`,
     * `_` and `-` are allowed. If an optional *callback* parameter was passed, the
     * *callback* function will be called. In case of an error, the first argument will
     * contain the error. In case of success, the first argument will be *null* and the
     * second argument will be a boolean indicating whether the value was removed.
     */
    removeItem(
      key: string,
      callback?: ((error: Error) => void) | ((error: null, valueRemove: boolean) => void)
    ): CloudStorage
    /**
     * `Bot API 6.9+` A method that removes values from the cloud storage using the
     * specified keys. The keys should contain 1-128 characters, only `A-Z`, `a-z`, `0-9`,
     * `_` and `-` are allowed. If an optional *callback* parameter was passed, the
     * *callback* function will be called. In case of an error, the first argument will
     * contain the error. In case of success, the first argument will be *null* and the
     * second argument will be a boolean indicating whether the values were removed.
     */
    removeItems(
      keys: string[],
      callback?:
        | ((error: Error) => void)
        | ((error: null, valuesRemoved: boolean) => void)
    ): CloudStorage
    /**
     * `Bot API 6.9+` A method that receives the list of all keys stored in the cloud
     * storage. In case of an error, the *callback* function will be called and the first
     * argument will contain the error. In case of success, the first argument will be
     * *null* and the list of keys will be passed as the second argument.
     */
    getKeys(
      callback: ((error: Error) => void) | ((error: null, keys: string[]) => void)
    ): CloudStorage
  }

  /**
   * This object controls biometrics on the device. Before the first use of this object,
   * it needs to be initialized using the init method.
   */
  interface BiometricManager {
    /**
     * `Bot API 7.2+` Shows whether biometrics object is initialized.
     */
    readonly isInited: boolean
    /**
     * `Bot API 7.2+` Shows whether biometrics is available on the current device.
     */
    readonly isBiometricAvailable: boolean
    /**
     * `Bot API 7.2+` The type of biometrics currently available on the device.
     *
     * Can be one of these values:
     * - *finger*, fingerprint-based biometrics,
     * - *face*, face-based biometrics,
     * - *unknown*, biometrics of an unknown type.
     */
    readonly biometricType: 'finger' | 'face' | 'unknown'
    /**
     * `Bot API 7.2+` Shows whether permission to use biometrics has been requested.
     */
    readonly isAccessRequested: boolean
    /**
     * `Bot API 7.2+` Shows whether permission to use biometrics has been granted.
     */
    readonly isAccessGranted: boolean
    /**
     * `Bot API 7.2+` Shows whether the token is saved in secure storage on the device.
     */
    readonly isBiometricTokenSaved: boolean
    /**
     * `Bot API 7.2+` A unique device identifier that can be used to match the token to
     * the device.
     */
    readonly deviceId: string
    /**
     * `Bot API 7.2+` A method that initializes the BiometricManager object. It should be
     * called before the object's first use. If an optional *callback* parameter was
     * passed, the *callback* function will be called when the object is initialized.
     */
    init(callback?: () => void): BiometricManager
    /**
     * `Bot API 7.2+` A method that requests permission to use biometrics according to the
     * *params* argument of type `BiometricRequestAccessParams`. If an optional *callback*
     * parameter was passed, the *callback* function will be called and the first argument
     * will be a boolean indicating whether the user granted access.
     */
    requestAccess(
      params: BiometricRequestAccessParams,
      callback?: (accessGranted: boolean) => void
    ): BiometricManager
    /**
     * `Bot API 7.2+` A method that authenticates the user using biometrics according to
     * the *params* argument of type `BiometricAuthenticateParams`. If an optional
     * *callback* parameter was passed, the *callback* function will be called and the
     * first argument will be a boolean indicating whether the user authenticated
     * successfully. If so, the second argument will be a biometric token.
     */
    authenticate(
      params: BiometricAuthenticateParams,
      callback?: (authenticatedSuccessfully: boolean) => void
    ): BiometricManager
    /**
     * `Bot API 7.2+` A method that updates the biometric token in secure storage on the
     * device. To remove the token, pass an empty string. If an optional *callback*
     * parameter was passed, the *callback* function will be called and the first argument
     * will be a boolean indicating whether the token was updated.
     */
    updateBiometricToken(
      token: string,
      callback?: (tokenPassed: boolean) => void
    ): BiometricManager
    /**
     * `Bot API 7.2+` A method that opens the biometric access settings for bots. Useful
     * when you need to request biometrics access to users who haven't granted it yet.
     *
     * *Note that this method can be called only in response to user interaction with the
     * Mini App interface (e.g. a click inside the Mini App or on the main button)*
     */
    openSettings(): BiometricManager
  }

  /**
   * This object describes the native popup for requesting permission to use biometrics.
   */
  interface BiometricRequestAccessParams {
    /**
     * The text to be displayed to a user in the popup describing why the bot needs access
     * to biometrics, 0-128 characters.
     */
    reason?: string
  }

  /**
   * This object describes the native popup for authenticating the user using biometrics.
   */
  interface BiometricAuthenticateParams {
    /**
     * The text to be displayed to a user in the popup describing why you are asking them
     * to authenticate and what action you will be taking based on that authentication,
     * 0-128 characters.
     */
    reason?: string
  }

  /**
   * This object contains data that is transferred to the Web App when it is opened. It is
   * empty if the Web App was launched from a keyboard button.
   */
  interface WebAppInitData {
    /**
     * A unique identifier for the Web App session, required for sending messages via the
     * answerWebAppQuery method.
     */
    readonly query_id?: string
    /**
     * An object containing data about the current user.
     */
    readonly user?: WebAppUser
    /**
     * An object containing data about the chat partner of the current user in the chat
     * where the bot was launched via the attachment menu. Returned only for private chats
     * and only for Web Apps launched via the attachment menu.
     */
    readonly receiver?: WebAppUser
    /**
     * An object containing data about the chat where the bot was launched via the
     * attachment menu. Returned for supergroups, channels and group chats – only for Web
     * Apps launched via the attachment menu.
     */
    readonly chat?: WebAppChat
    /**
     * Type of the chat from which the Mini App was opened. Can be either “sender” for a
     * private chat with the user opening the link, “private”, “group”, “supergroup”, or
     * “channel”. Returned only for Mini Apps launched from direct links.
     */
    readonly chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel'
    /**
     * Global identifier, uniquely corresponding to the chat from which the Mini App was
     * opened. Returned only for Mini Apps launched from a direct link.
     */
    readonly chat_instance?: string
    /**
     * The value of the *startattach* parameter, passed via link. Only returned for Web
     * Apps when launched from the attachment menu via link.
     *
     * The value of the `start_param` parameter will also be passed in the GET-parameter
     * `tgWebAppStartParam`, so the Web App can load the correct interface right away.
     */
    readonly start_param?: string
    /**
     * Time in seconds, after which a message can be sent via the answerWebAppQuery
     * method.
     */
    readonly can_send_after?: number
    /**
     * Unix time when the form was opened.
     */
    readonly auth_date: number
    /**
     * A hash of all passed parameters, which the bot server can use to check their
     * validity.
     */
    readonly hash: string
  }

  /**
   * This object contains the data of the Web App user.
   */
  interface WebAppUser {
    /**
     * A unique identifier for the user or bot. This number may have more than 32
     * significant bits and some programming languages may have difficulty/silent defects
     * in interpreting it. It has at most 52 significant bits, so a 64-bit integer or a
     * double-precision float type is safe for storing this identifier.
     */
    readonly id: number
    /**
     * *True*, if this user is a bot. Returns in the receiver field only.
     */
    readonly is_bot?: boolean
    /**
     * First name of the user or bot.
     */
    readonly first_name: string
    /**
     * Last name of the user or bot.
     */
    readonly last_name?: string
    /**
     * Username of the user or bot.
     */
    readonly username?: string
    /**
     * IETF language tag of the user's language. Returns in user field only.
     */
    readonly language_code?: string
    /**
     * *True*, if this user is a Telegram Premium user
     */
    readonly is_premium?: true
    /**
     * *True*, if this user added the bot to the attachment menu.
     */
    readonly added_to_attachment_menu?: true
    /**
     * *True*, if this user allowed the bot to message them.
     */
    readonly allows_write_to_pm?: true
    /**
     * URL of the user’s profile photo. The photo can be in .jpeg or .svg formats. Only
     * returned for Web Apps launched from the attachment menu.
     */
    readonly photo_url?: string
  }

  /**
   * This object represents a chat.
   */
  interface WebAppChat {
    /**
     * Unique identifier for this chat. This number may have more than 32 significant bits
     * and some programming languages may have difficulty/silent defects in interpreting
     * it. But it has at most 52 significant bits, so a signed 64-bit integer or
     * double-precision float type are safe for storing this identifier.
     */
    readonly id: number
    /**
     * Type of chat
     */
    readonly type: 'group' | 'supergroup' | 'channel'
    /**
     * Title of the chat
     */
    readonly title: string
    /**
     * Username of the chat
     */
    readonly username?: string
    /**
     * URL of the chat’s photo. The photo can be in .jpeg or .svg formats. Only returned
     * for Web Apps launched from the attachment menu.
     */
    readonly photo_url?: string
  }

  type ColorScheme = 'light' | 'dark'
  type ViewportChangedEventHandler = (
    this: { viewportHeight: number },
    params: { isStateStable: boolean }
  ) => void
  type InvoiceClosedEventHandler = (params: {
    url: string
    status: 'paid' | 'cancelled' | 'failed' | 'pending'
  }) => void
  type PopupClosedEventHandler = (params: { button_id: string | null }) => void
  type QrTextReceivedEventHandler = (params: { data: string }) => void
  type ClipboardTextReceivedEventHandler = (params: { data: string | null }) => void
  type BiometricAuthRequestedEventHandler = (
    params: { isAuthenticated: true; biometricToken: string } | { isAuthenticated: false }
  ) => void
  type BiometricTokenUpdatedEventHandler = (params: { isUpdated: boolean }) => void
}

declare global {
  const Telegram: { WebApp: TelegramWebApps.WebApp }
}
