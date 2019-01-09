import Introduction from '../components/Introduction';
import Confirmation from '../components/Confirmation';



import PhoneNumberWidget from 'us-forms-system/lib/js/widgets/PhoneNumberWidget';
import TextAreaWidget from '../components/TextAreaWidget/TextAreaWidget';
import OfficerListWidget from '../components/OfficerListWidget/OfficerListWidget'
import FileUpload from '../components/FileUpload/FileUpload'


const formConfig = {
  title: 'Police Oversight and Accountability Form',
  subTitle: 'Complaint',
  formId: 'complaintForm',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: 'http://127.0.0.1:5000/form/post-debug',
  introduction: Introduction,
  confirmation: Confirmation,
  defaultDefinitions: {},
  chapters: {

    // Incident Description
    dataAvailableChapter: {
      title: 'Officer Information',
      pages: {

        // Is data available
        dataAvailablePage: {
          path: 'incident/data-available',
          title: 'Tell us about the officer(s)',
          schema: {
            type: 'object',
            properties: {
              officerDataAvailable: {
                type: 'string',
                enum: ['YES', 'NO']
              }
            }
          },
          uiSchema: {
            'ui:title': 'Do you remember or have access to any details about the officer(s) you would like to provide?',
            officerDataAvailable: {
              'ui:title': 'Are you able to provide details:',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  YES: 'Yes',
                  NO: 'No'
                }
              }
            }
          }
        } // end of data available page
      }
    }, // end of data available chapter


    // Incident Description
    incidentDescriptionChapter: {
      title: 'Incident Description',
      pages: {
        // Incident Description
        incidentDescriptionPage: {
          path: 'incident/description',
          title: 'Tell us what happened?',
          schema: {
            type: 'object',

            properties: {
              incidentDescription: {
                type: 'string'
              },

              evidenceFiles: {
                type: 'string'
              },

              incidentDate: {
                type: 'string'
              },

              incidentTime: {
                type: 'string'
              },

              incidentLocation: {
                type: 'string'
              }
            }
          },
          uiSchema: {
            'ui:title': 'Tell us what happened: ',
            incidentDescription: {
              'ui:title': 'Describe the incident: ',
              'ui:widget': TextAreaWidget
            },

            evidenceFiles: {
              'ui:title': 'Select File:',
              'ui:widget': FileUpload
            },

            incidentDate: {
              'ui:title': 'When did this happen?',
              'ui:widget': 'date'
            },

            incidentTime: {
              'ui:title': 'Time of the day (hh:mm):'
            },

            incidentLocation: {
              'ui:title': 'Address, intersection (or best approximation): '
            }
          }
        } // end of incident description page
      }
    }, // end of incident description chapter

    // About you Chapter
    tellUsAboutYouChapter: {
      title: 'About You',
      pages: {

        // Tell us about you page
        tellUsAboutYouPage: {
          path: 'incident/aboutyou',
          title: 'Tell us about you.',
          schema: {
            type: 'object',

            properties: {
              userEthnicity: {
                type: 'string',
                enum: ['WHITE',
                       'HISPANIC',
                       'BLACK',
                       'NATIVE',
                       'ASIAN',
                       'OTHER'
                     ]
              },

              userGender: {
                type: 'string',
                enum: ['male', 'female', 'nonbinary', 'other']
              },

              userZipCode: {
                type: 'string'
              },

              userContactPreferences: {
                type: 'string',
                enum: ['YES', 'NO']
              },

              userName: {
                type: 'string'
              },

              userPhoneNumber: {
                type: 'string'
              },

              userEmail: {
                type: 'string'
              },

              userNeedsTranslator: {
                type: 'string',
                enum: ['YES', 'NO']
              },

              userPreferredLanguage: {
                type: 'string'
              }


            }
          },
          uiSchema: {
            'ui:title': 'Tell us about you: ',
              userEthnicity: {
              'ui:title': 'Select your ethnicity:',

              'ui:options': {
                labels: {
                  WHITE: 'White',
                  HISPANIC: 'Hispanic or Latino',
                  BLACK: 'Black or African American',
                  NATIVE: 'Native American or American Indian',
                  ASIAN: 'Asian / Pacific Islander',
                  OTHER: 'Other'
                }
              }
            },

            userGender: {
              'ui:title': 'Your Gender: ',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  male: 'Male',
                  female: 'Female',
                  nonbinary: 'Non-binary',
                  other: 'Prefer not to say'
                }
              }
            },

            userZipCode: {
              'ui:title': 'Zip Code:'
            },

            userContactPreferences: {
              'ui:title': 'I am willing to be contacted by the Civilian Office of Police Oversight and Accountability.',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  YES: 'Yes',
                  NO: 'No'
                }
              }
            },

            userName: {
              'ui:title': 'Your Name:'
            },

            userPhoneNumber: {
              'ui:title': 'Your Phone Number:',
              'ui:widget': PhoneNumberWidget
            },

            userEmail: {
              'ui:title': 'Your Email:',
              'ui:widget': 'email'
            },

            userNeedsTranslator: {
              'ui:title': 'Will you need a Translator?',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  YES: 'Yes',
                  NO: 'No'
                }
              }
            },

            userPreferredLanguage: {
              'ui:title': "Your Preferred Language"
            }
          }
        }, // end of tell us about you page
      }
    }, // end of tell us about you chapter

    // How did you find us chapter
    howDidYouFindUsChapter: {
      title: 'How did you find us?',
      pages: {
        // How did you find us Page
        howDidYouFindUsPage: {
          path: 'incident/howdidyoufindus',
          title: 'How did you get this form?',
          schema: {
            type: 'object',

            properties: {
              referralMethod: {
                type: 'string',
                enum: ['SEARCHENGINE',
                       'OFFICER',
                       'AUSTINGOV',
                       'APD',
                       'COMMUNITYORG',
                       'OTHER'
                     ]
              },

              organizationName: {
                type: 'string'
              },


            }
          },
          uiSchema: {
            'ui:title': 'Tell us about you: ',
              referralMethod: {
              'ui:title': 'How did you find this form?',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  SEARCHENGINE: 'Search Engine',
                  OFFICER: 'Officer',
                  AUSTINGOV: 'Austin.gov',
                  APD: 'Email, Text or Paper material from the Austin Police Department',
                  COMMUNITYORG: 'Community or Organization',
                  OTHER: 'Other'
                }
              }
            },

            organizationName: {
              'ui:title': 'Name if organization (if other): '
            }
          }
        } // end of "How did you find us" Page
      }
    } // end of how did you find us chapter.



  }
};

export default formConfig;
