import Introduction from '../components/Introduction.jsx';

const formConfig = {
  title: 'Form',
  subTitle: 'Test',
  formId: '',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: 'http://127.0.0.1:5000/knack/submit',
  introduction: Introduction,
  confirmation: '',
  defaultDefinitions: {},
  chapters: {
    firstChapter: {
      title: 'First Chapter',
      pages: {
        firstPage: {
          path: 'first-chapter/first-page',
          title: 'Tell us about the officer(s)',
          schema: {
            type: 'object',

            properties: {
              officerDataAvailable: {
                type: 'boolean'
              }
            }
          },
          uiSchema: {
            'ui:title': 'Do you remember or have access to any details about the officer(s) you would like to provide?',
            officerDataAvailable: {
              'ui:title': ' ',
              'ui:widget': 'yesNo'
            }
          }
        },
        secPage: {
          path: 'first-chapter/sec-page',
          title: 'Tell us about the officer(s)',
          schema: {
            type: 'object',

            properties: {
              eventDescription: {
                type: 'string'
              }
            }
          },
          uiSchema: {
            'ui:title': 'Description (required): ',
            eventDescription: {
              'ui:title': ' ',
            }
          }
        }
      }
    }
  }
};

export default formConfig;
