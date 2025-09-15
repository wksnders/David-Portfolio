# Localized Portfolio Website

Check out the [preview site here](https://wksnders.github.io/David-Portfolio/#/).

## Localization Guide

This project uses **YAML files** to manage translations for multiple languages.  
Each YAML file corresponds to one language (for example `en.yaml` for English, `ko.yaml` for Korean).


### File Structure

public/locales/en.yaml # English translations

public/locales/ko.yaml # Korean translations

**Note:** File names use the **ISO 639-1** language codes and are always **2 letters** (e.g., `en` for English, `fr` for French, `ko` for Korean).

### Editing/Adding Translations

Each YAML file contains **key/value pairs**.  
The **key** is a unique identifier used in the code, and the **value** is the translated text.

Any **keys omitted** from a given localization file will pass through to the default of English(`en.yaml`) where there is a complete set of keys. For example if the key 'title' was missing from `ko.yaml` the website will use the value of 'title' in `en.yaml` instead of displaying an error.

Example (`en.yaml`):
```yaml
ContactFormPageTitle: "Contact Us"
ContactFormNameLabel: "Name"
ContactFormEmailLabel: "Email"
ContactFormSubjectLabel: "Subject"
ContactFormMessageLabel: "Message"
ContactFormSubmitButton: "Send"
ContactFormSuccessMessage: "Your message has been sent successfully!"
ContactFormErrorMessage: "Something went wrong. Please try again."
ContactFormSendingMessage: "Sending..."
```
The keys in green are not translated in a given translation file. only the text within the "quotation marks" noted in blue above is what changes when localizing to a new area. For example:

```yaml
ContactFormPageTitle: "문의하기"
ContactFormNameLabel: "이름"
ContactFormEmailLabel: "이메일"
ContactFormSubjectLabel: "제목"
ContactFormMessageLabel: "메시지"
ContactFormSubmitButton: "보내기"
ContactFormSuccessMessage: "메시지가 성공적으로 전송되었습니다!"
ContactFormErrorMessage: "문제가 발생했습니다. 다시 시도해 주세요."
ContactFormSendingMessage: "전송 중..."
```
**Note:** this was automatically translated and only for example purposes.


Localization files can be uploaded to this github repository or added directly to the public folder of your static web host.

When adding a **new language**, if you want it to be displayed in the language dropdown, you'll need to specifically edit the LanguageSelect.vue file to include it in the listed languages.
