GOVUK.registerToVote.messages=(function(u){function f(k){
var m;
if(typeof k==='object'){
for(var i=0,l=k.length;i<l&&f.messages[k[i]]===u;++i);
m=f.messages[k[i]]||k[0]
}else{
m=((f.messages[k]!==u)?f.messages[k]:k)
}
for(i=1;i<arguments.length;i++){
m=m.replace('{'+(i-1)+'}',arguments[i])
}
return m};
f.messages={"exit_northernIreland_yourElectoralOffice":"local area electoral office","ordinary_otheraddr_yesTwoHomes":"Yes, I spend time living at two homes","lookup_show_title":"Contact your local Electoral Registration Office","ordinary_confirmation_previousAddress_title_lastAddress":"Last UK address","ordinary_dob_help_cannotProvideDOB_ageGroup_under18_option":"<span class=\"visuallyhidden\">I am</span>Under 18 years old","ordinary_nationality_help_content_3":"Why can’t you provide your nationality?","ordinary_otheraddr_yesImStudent_p2":"If you’re not already registered at your other address, you can make a separate application through this service.","ordinary_postalVote_postalVote_deliveryOptionsQuestion":"You’ll need to sign and return a postal vote application form. How should we send you the form?","ordinary_confirmation_name_changeName":"full name","ordinary_openRegister_help_detecting_crime":"detecting crime (eg fraud)","ordinary_address_select_couldNotFindAnyAddresses_p":"Sorry – we couldn’t find any addresses for that postcode","ordinary_confirmation_postalVote_mailDelivery":"I want you to mail me a postal vote application form","ordinary_postalVote_postalVote_option":"Yes, I want a postal vote","ordinary_dob_error_enterDateOfBirth":"Please enter your date of birth","ordinary_address_postcode_ifYouArePrisoner_p":"If you’re a prisoner on long term remand, use the address of the prison.","feedback_title":"Give feedback","ordinary_confirmation_nino_noNinoReason":"I cannot provide my national insurance number because:","ordinary_dob_help_cannotProvideDOB_ageGroupQuestion":"What age group do you belong to?","ordinary_confirmation_nationality_changeName":"nationality","ordinary_address_manual_changeYourPostcode_a":"Change<span class=\"visuallyhidden\"> your postcode</span>","ordinary_contact_title":"If we have questions about your application, how should we contact you?","ordinary_openRegister_help_heading_2":"The open register","ordinary_previousName_lastName_label":"<span class=\"visuallyhidden\">Previous</span> Last name","ordinary_confirmation_nationality_british":"British","ordinary_address_previousAddressExcuse":"I can’t find my previous address in the list","ordinary_confirmation_submitApplication":"I accept – send my application","feedback_thankYou_p1":"If you select continue you will be transferred to the last edited step","back_button_non_visual":"to the previous question","ordinary_contact_phoneCall_option":"Phone call","ordinary_confirmation_dob_noDOBDontKnow":"I don’t know my age","ordinary_nationality_dualNationality":"If you have dual nationality","ordinary_otheraddr_noTwoHomes":"No","lookup_show_email":"Email","ordinary_country_britishAbroad_heading":"Where did you live before you moved to another country?","ordinary_address_postcode_ifYouDontHavePermanentAddress_h4":"If you don’t have a permanent address","ordinary_confirmation_address_title":"Address","exit_britishIslands_explanation":"You can't register online if you live in the Channel Islands or the Isle Of Man.","ordinary_confirmation_contact_byPhone":"By phone: {0}","ordinary_openRegister_help_content_5":"Your name and address will be included in the open register unless you ask for them to be removed. Removing your details from the open register does not affect your right to vote.","ordinary_name_error_enterLastName":"Please enter your last name","ordinary_previousAddress_select_addressesFound":"addresses found","ordinary_openRegister_title":"Do you want to include your name and address on the open register?","ordinary_previousAddress_manual_error_cityRequired":"Postal town or city is required","ordinary_previousAddress_postcode_findAddress":"Find address","ordinary_confirmation_previousAddress_movedFromNI":"I was previously registered in Northern Ireland","feedback_submit":"Send","ordinary_contact_emailAddress":"Email address","ordinary_country_error_pleaseAnswer":"Please answer this question","ordinary_openRegister_choice":"No, I don’t want my name and address on the open register","ordinary_name_middleNames_label":"Middle names","ordinary_address_error_cityIsRequired":"Postal town or city is required","ordinary_address_selectAddress":"Select your address","ordinary_previousName_hasPreviousName_yes_label":"Yes<span class=\"visuallyhidden\"> I changed my name in the last 12 months</span>","service_footer_forHelp":"for help using this service","ordinary_country_or":"or","ordinary_dob_day_label":"Day","ordinary_nationality_error_notValid":"This is not a valid country","service_footer_supportLinks":"Support links","ordinary_dob_error_invalidMonth":"The month you provided is invalid","ordinary_dob_help_cannotProvideDOB_reasonQuestion":"Why can’t you provide your date of birth?","ordinary_address_postcode_forExample_p":"For example, if you’re a student living away from home, you may be able to register at both your home and term time addresses.","ordinary_address_postcode_ifYouAreHomeless_p":"If you’re homeless and living in temporary accommodation (for example, a long term hostel), use that address.","ordinary_confirmation_openRegister_optOut":"I don’t want my name and address on the open register","feedback_contact_h2":"Do you want a reply?","ordinary_openRegister_help_content_1":"Using information received from the public, registration officers keep two registers – the electoral register and the open register (also known as the edited register).","ordinary_openRegister_help_calling_people":"calling people for jury service","ordinary_nationality_country":"Country","constraint.email":"Email","ordinary_dob_year_label":"Year","ordinary_name_error_lastNameTooLong":"Last name can be no longer than 35 characters","ordinary_openRegister_help_content_4":"The open register is an extract of the electoral register, but is not used for elections. It can be bought by any person, company or organisation. For example, it is used by businesses and charities to confirm name and address details.","ordinary_previousAddress_select_error_noAddressesFound":"Sorry – we couldn’t find any addresses for that postcode","ordinary_name_lastName_label":"Last name","ordinary_nationality_secondCountry":"Country name<span class=\"visuallyhidden\"> second</span>","ordinary_confirmation_nationality_irish":"Irish","feedback_thankYou_exit_button":"Return to your application","ordinary_openRegister_help_checking_credit":"checking credit applications","ordinary_previousName_error_enterLastName":"Please enter your previous last name","ordinary_confirmation_postalVote_title":"Postal vote","ordinary_dob_error_enterDay":"Please enter your day of birth","ordinary_confirmation_nationality_iAm":"I am","ordinary_postalVote_help_link":"What is a postal vote?","service_header_ordinary":"Register to vote","ordinary_address_continue":"Continue","exit_tooYoung_explanation":"You can’t register to vote until you’re 16. In the meantime, you may be interested in the <a href=\"http://www.ukyouthparliament.org.uk/\">UK Youth Parliament</a>.","exit_northernIreland_postItTo":"then post it to your","ordinary_openRegister_content_2":"Your decision won’t affect your right to vote.","complete_ifYouAreNotAlreadyRegistered2_p":"make another application","complete_electoralRegistrationOffice":"Electoral Registration Office","ordinary_address_loading":"Finding address","ordinary_previousAddress_select_postcodeChange":"Change<span class=\"visuallyhidden\"> your postcode</span>","ordinary_confirmation_openRegister_title":"Open register","ordinary_name_error_firstNameTooLong":"First name can be no longer than 35 characters","ordinary_confirmation_secondAddress_haveAddress":"I have a second address","ordinary_nino_help":"I don’t know my National Insurance number","ordinary_nationality_help_heading_2":"I can’t provide my nationality","feedback_contact_descr_p1":"Leave your details below if you'd like a response.","ordinary_address_manual_address_label_1":"Address line one","ordinary_nino_list_2":"ask for a reminder through the post","ordinary_confirmation_dob_noDOBReason":"You are unable to provide your date of birth because: {0}","ordinary_previousAddress_yesFromUk_option":"Yes, from a UK address","ordinary_nationality_irish":"Irish","ordinary_postalVote_voteInPerson_option":"No, I prefer to vote in person","feedback_contact_email_label":"Email address","ordinary_otheraddr_ifYouHaveSecondAddress_h2":"If you have a second address","ordinary_previousAddress_manual_error_answerThis":"Please answer this question","complete_takeOurSurvey_a":"What did you think of this service?","ordinary_nationality_AddAnotherCountry":"Add another country","ordinary_confirmation_help_p1":"By sending your application you confirm that the information you have provided is true.","constraint.maxLength":"Maximum length: {0}","ordinary_confirmation_secondAddress_changeName":"second address","ordinary_dob_help_content_1":"If you don’t know your exact date of birth, use the one you put on official documents (for example, your passport or driving licence).","ordinary_confirmation_error_completeThis":"Please complete this step","exit_under18_title":"You need to find out your date of birth","ordinary_nationality_error_pleaseAnswer":"Please answer this question","ordinary_dob_help_cannotProvideDOB_link":"I can’t provide my date of birth","ordinary_confirmation_nationality_and":"and","exit_britishIslands_title":"Registering to Vote from the Channel Islands or the Isle Of Man","ordinary_address_postcode_ifYouHaveMoreThanOneAddress_h4":"If you have more than one address","ordinary_confirmation_help_p3":"You could be fined up to £5,000 or go to prison for up to 6 months if you knowingly give false information in your application.","ordinary_address_postcode_dontKnowMyPostcode_dtt":"I don’t know what postcode to use","exit_under18_explanation":"If you're under 18, you have to provide a date of birth before you can register to vote.","ordinary_postalVote_optionsQuestion":"Most people vote in person at a polling station. But if you prefer to vote by post, we can send you an application form.","ordinary_postalVote_help_content_3":"If you’re not sure whether you want a postal vote, you can complete your registration now and apply for a postal vote later.","ordinary_address_manual_postcode_label":"Postcode","ordinary_previousAddress_postcode_error_enterPostcode":"Please enter your postcode","constraint.required":"Required","ordinary_address_select_enterManually":"Enter your address manually","ordinary_confirmation_postalVote_dontWant":"I don’t want to apply for a postal vote","ordinary_dob_error_invalidDay":"The day you provided is invalid","service_footer_contactEro":"Contact your local Electoral Registration Office","ordinary_confirmation_previousName_title":"Previous name","ordinary_previousAddress_no_option":"No","exit_nationality_noFranchise_title":"Sorry, you can’t register to vote","ordinary_previousName_header":"What was your previous name?","ordinary_nationality_otherCountry":"Citizen of a different country","ordinary_address_postcode_makeTwoSeparateApplications_p":"If you want to register at two addresses, make two separate applications through this service. Your local Electoral Registration Office will look at each application and tell you whether you’re allowed to register.","ordinary_confirmation_nino_title":"National Insurance number","ordinary_confirmation_previousAddress_title_previous":"Previous address","exit_scotland_registrationForm":"registration form","ordinary_contact_phoneNumber":"Phone number","ordinary_contact_post_option":"Post","ordinary_dob_help_cannotProvideDOB_ageGroup_dontKnow_option":"Don’t know<span class=\"visuallyhidden\"> the age group I belong to</span>","ordinary_confirmation_title_header":"Confirm your details – Register to vote","constraint.minLength":"Minimum length: {0}","exit_dontKnow_title":"You need to find out whether you're 18 or over","ordinary_confirmation_contact_byPost":"By post","ordinary_nino_section_2":"If you can’t provide a National Insurance number, you will need to explain why. And after you’ve applied, you’ll be asked to prove your identity by sending documents in the post.","exit_northernIreland_explanation":"You can't register online if you live in Northern Ireland.","exit_nationality_noFranchise_content":"To register to vote you have to be British, or an EU or Commonwealth citizen living in the UK.","ordinary_address_select_title":"What is your address?","ordinary_openRegister_help_content_2":"The electoral register lists the names and addresses of everyone who is registered to vote in public elections. The register is used for electoral purposes, such as making sure only eligible people can vote.","exit_scotland_instead":"Instead, download a","ordinary_dob_error_invalidYear":"The year you provided is invalid","ordinary_nino_excuse":"I can’t provide a National Insurance number","ordinary_address_manual_address_label_2":"Address line two","ordinary_confirmation_secondAddress_dontHaveAddress":"I don’t have a second address","ordinary_address_postcode":"Postcode","ordinary_nationality_error_noMoreFiveCountries":"You can specify no more than five countries","ordinary_previousName_error_enterFirstName":"Please enter your previous first name","ordinary_otheraddr_title":"Do you also live at a second address?","ordinary_nationality_help_content_1":"If you’re not sure about your nationality, try to find out from an official document like a passport or national ID card.","lookup_show_website":"Website","ordinary_nino_list_1":"look for your National Insurance number on payslips or official letters about tax, pensions or benefits","ordinary_confirmation_openRegister_optIn":"I want to include my name and address on the open register","ordinary_previousName_error_firstNameTooLong":"Previous first name can be no longer than 35 characters","exit_under18_tryToFindDOBOut":"Try to find out your date of birth. If you have trouble, <a href=\"https://www.gov.uk/get-on-electoral-register\">contact your local Electoral Registration Office</a> for advice.","lookup_postcode_label":"Postcode","feedback_thankYou_title":"Thank you for your feedback","complete_step_title":"Application Complete","ordinary_postalVote_title":"Do you want to apply for a postal vote?","ordinary_contact_error_enterYourEmail":"Please enter your email address","ordinary_address_previousAddressTest":"previous address","ordinary_otheraddr_yesImStudent":"Yes, I’m a student with home and term-time addresses","ordinary_previousAddress_yesFromAbroad_wasRegistered_yes_option":"Yes","ordinary_previousName_middleNames_label":"<span class=\"visuallyhidden\">Previous</span> Middle names","ordinary_openRegister_help_heading_1":"The electoral register","exit_scotland_explanation":"You can’t register online yet if you live in Scotland.","ordinary_nationality_autocomplete_status_prefix_multiple":"results are","ordinary_previousAddress_postcode_postcode_label":"Postcode","ordinary_confirmation_nino_changeName":"national insurance number","ordinary_nationality_autocomplete_status_prefix_singular":"result is","ordinary_address_nAddressFound":"{0} addresses found","ordinary_dob_error_answerThis":"Please answer this question","ordinary_confirmation_dob_changeName":"date of birth","ordinary_postalVote_postalVote_deliveryPost_option":"Post it to me","ordinary_contact_emailConfirmationMessage":"Enter an email address if you want an email confirmation of your registration.","ordinary_confirmation_previousAddress_movedFromAbroadNotRegistered":"I moved from abroad, but I was not registered to vote there","ordinary_dob_error_dateInTheFuture":"You have entered a date in the future","ordinary_otheraddr_ifYouHaveSecondAddr_p1":"You may be able to register at both addresses (though you can only vote once in any election).","ordinary_confirmation_openRegister_changeName":"open register","exit_northernIreland_title":"Voter canvass form for Northern Ireland","exit_scotland_from":"from About My Vote.","ordinary_confirmation_previousAddress_changeName":"your previous address","ordinary_dob_formatExample":"For example: <span class=\"date\">31 3 1970</span>","ordinary_confirmation_nationality_citizenOf":"a citizen of","ordinary_address_postcode_itIsPossible_p":"It’s sometimes possible to register at two addresses (though you can only vote once in any election).","ordinary_confirmation_dob_noDOB18to70":"I am over 18 years old","lookup_show_phone":"Phone","ordinary_postalVote_error_enterYourEmail":"Please enter your email address","complete_questionsContact_p1":"Contact","ordinary_previousName_error_answerThis":"Please answer this question","ordinary_dob_error_tooOld":"Please check the year you were born","ordinary_contact_error_pleaseEnterValidEmail":"Please enter a valid email address","ordinary_confirmation_contact_title":"How we should contact you","ordinary_confirmation_postalVote_changeName":"postal vote","ordinary_postalVote_error_enterValidEmail":"Please enter a valid email address","ordinary_nationality_british":"British","ordinary_confirmation_help_p2":"Your information may be shared with other government departments to check your identity and that you’re entitled to register to vote.","complete_ifYouAreNotAlreadyRegistered1_p":"If you're not already registered at your second address, you can","ordinary_previousAddress_yesFromAbroad_wasRegistered_no_option":"No","feedback_description_p2":"What went wrong, if anything? What went well? How could we improve this service?","ordinary_dob_help_content_2":"If you can’t provide your date of birth you’ll have to send copies of identity documents through the post.","constraint.min":"Minimum value: {0}","ordinary_country_britishAbroad_option":"British citizen living in another country (including the Channel Islands or Isle of Man)","lookup_show_exit_button":"Return to your application","ordinary_previousAddress_yesFromAbroadWasRegistered_title":"What was your last UK address before moving abroad?","ordinary_address_select_cannotFindMyAddressInTheList_a":"I can’t find my address in the list<span class=\"visuallyhidden\"> section</span>","ordinary_dob_help_link":"Help with date of birth","feedback_detail_hint":"(Limit is {0} characters)","ordinary_openRegister_help_link":"Why are two registers?","ordinary_contact_error_pleaseAnswer":"Please answer this question","ordinary_previousAddress_yesFromAbroad_option":"Yes, from abroad","ordinary_confirmation_previousName_changeName":"previous name","lookup_instruction":"Enter the postcode of the address you are registering with","ordinary_dob_help_cannotProvideDOB_ageGroup_between18and70_option":"<span class=\"visuallyhidden\">I am</span>Between 18 and 70 years old","ordinary_confirmation_secondAddress_title":"Second address","complete_contactYouTo_p":"They will contact you – either to confirm that you're registered to vote, or to ask for more information.","ordinary_openRegister_help_content_3":"It is also used for other limited purposes specified in law, such as:","ordinary_postalVote_postalVote_deliveryEmail_option":"Email it to me","ordinary_previousName_error_middleNamesTooLong":"Previous middle names can be no longer than 100 characters","ordinary_address_manual_address_label_3":"Address line three","ordinary_nino_error_maxLength":"Reason for not providing National Insurance number must be described in up to 500 characters","ordinary_confirmation_nationality_title":"Nationality","ordinary_confirmation_address_changeName":"your address","ordinary_address_postcode_postcode_label":"Postcode","ordinary_previousAddress_manual_address_label":"Address","ordinary_nationality_help_content_2":"We need to know your nationality so we can work out which elections you’re entitled to vote in. If you can’t provide your nationality, you’ll have to send copies of identity documents through the post.","exit_nationality_noFranchise_moreAboutVoting":"More about voting in the UK","ordinary_previousName_error_lastNameTooLong":"Previous last name can be no longer than 35 characters","ordinary_previousAddress_yesFromAbroad_wasRegisteredQuestion":"Were you registered as a UK voter when you were abroad?","lookup_show_yourLocalAuthorityIs":"Your Local Authority is","ordinary_previousAddress_error_answerThis":"Please answer this question","ordinary_confirmation_previousAddress_notMoved":"I have not moved in the last 12 months","ordinary_nino_excuse_content":"Why can’t you provide a National Insurance number?","ordinary_confirmation_name_title":"Name","step_of":"of","ordinary_address_select_changeYourPostcode_a":"Change<span class=\"visuallyhidden\"> your postcode</span>","ordinary_previousAddress_manual_error_oneAddressLineRequired":"At least one address line is required","ordinary_confirmation_dob_noDOBUnder18":"I am roughly under 18","ordinary_otheraddr_error_pleaseAnswer":"Please answer this question","ordinary_dob_title":"What is your date of birth?","ordinary_confirmation_edit_link":"Change","ordinary_address_manual_townOrCity_label":"Town or city","lookup_show_address":"Address","ordinary_country_northernIreland":"Northern Ireland","ordinary_nino_error_incorrectFormat":"Your National Insurance number is not correct","exit_scotland_title":"Voter registration forms for Scotland","ordinary_address_error_pleaseEnterYourPostcode":"Please enter your postcode","ordinary_previousAddress_select_error_answerThis":"Please select your address","complete_moreAboutVoting_a":"More about voting in the UK","lookup_error_noneFound":"No Electoral Registration Office has been found. Please check your postcode.","ordinary_address_postcode_dontKnowMyPostcode_h2":"I don’t know what postcode to use","ordinary_contact_email_option":"Email","ordinary_confirmation_contact_changeName":"how we should contact you","ordinary_postalVote_error_answerThis":"Please answer this question","ordinary_country_heading":"Where do you live?","ordinary_nationality_content_1":"If you have dual nationality, select all options that are relevant to you.","ordinary_previousName_error_enterFullName":"Please enter your previous name","ordinary_postalVote_help_content_2":"Anyone can apply for a postal vote. You don’t need to give a reason.","complete_emailConfirmation":"We have sent you a confirmation email.","ordinary_address_postcode_ifYouCannotProvideAddress_p":"If you can’t provide an address, contact <a href=\"https://www.gov.uk/get-on-electoral-register\">your local Electoral Registration Office</a> for advice.","ordinary_dob_error_selectRange":"Please select a rough age range","complete_unspecificElectoralRegistrationOffice":"your local Electoral Registration Office","ordinary_postalVote_postalVote_heading":"If you want a postal vote application form","complete_applicationComplete_h1":"Application complete","ordinary_address_error_pleaseAnswer":"Please answer this question","ordinary_dob_month_label":"Month","ordinary_country_error_notValidCountry":"This is not a valid country","ordinary_country_england":"England","feedback_detail_label":"Detail","ordinary_previousAddress_select_selectAddress":"<span class=\"visuallyhidden\">Select your </span>Address","ordinary_previousAddress_select_postcode_label":"Postcode","ordinary_dob_error_invalidDate":"You have entered an invalid date","ordinary_address_manual_address_label_heading":"Address","ordinary_nationality_help_heading_1":"Help with nationality","ordinary_address_excuse":"I can’t find my address in the list","exit_northernIreland_paperRegistration":"registration form","ordinary_previousAddress_manual_postcodeChange":"Change<span class=\"visuallyhidden\"> your postcode</span>","ordinary_contact_error_enterYourPhoneNo":"Please enter your phone number","ordinary_address_select_postcode_label":"Postcode","ordinary_dob_error_enterYear":"Please enter your year of birth","feedback_description_p1":"Please don’t include any personal or financial information - for example your National Insurance number.","constraint.max":"Maximum value: {0}","ordinary_name_error_enterFullName":"Please enter your full name","ordinary_name_error_middleNamesTooLong":"Middle names can be no longer than 100 characters","ordinary_country_scotland":"Scotland","format.real":"Real","ordinary_confirmation_help_h2":"Send your application","ordinary_previousAddress_error_invalidOption":"Not a valid option","ordinary_otheraddr_yesImStudent_p1":"Students can register to vote at their home and term time addresses.","ordinary_previousName_firstName_label":"<span class=\"visuallyhidden\">Previous</span> First name","ordinary_dob_help_cannotProvideDOB_ageGroup_over70_option":"<span class=\"visuallyhidden\">I am</span>Over 70 years old","complete_takeOurSurvey_p":"(takes 30 seconds)","exit_dontKnow_explanation":"You can only register if you're able to confirm that you're 18 or over. If you have trouble, <a href=\"https://www.gov.uk/get-on-electoral-register\">contact your local Electoral Registration Office</a> for advice.","ordinary_nino_section_1":"You can:","ordinary_address_error_pleaseSelectYourAddress":"Please select your address","ordinary_address_selectPreviousAddress":"Select your previous address","ordinary_nino_heading":"What is your National Insurance number?","complete_questionsContact_p2":"if you have any questions about your application","ordinary_previousAddress_postcode_error_invalidPostcode":"Your postcode is not valid","exit_northernIreland_instead":"Instead, download and complete a","ordinary_nationality_thirdCountry":"Country name<span class=\"visuallyhidden\"> third</span>","ordinary_address_select_selectYourAddress_p":"<span class=\"visuallyhidden\">Select your </span>Address","ordinary_address_error_lineOneIsRequired":"At least one address line is required","ordinary_nationality_whichCountry":"Country name<span class=\"visuallyhidden\"> first</span>","ordinary_confirmation_previousName_nameNotChanged":"I have not changed my name in the last 12 months","ordinary_nino_error_noneEntered":"Please enter your National Insurance number","ordinary_previousAddress_yesFromUk_title":"What was your previous address?","ordinary_address_postcode_findAddress_button":"Find address","ordinary_confirmation_title":"Check your answers before sending your application","ordinary_address_postcode_tryWebSearchEngine_p":"If you can’t find your postcode on a letter or other document, try entering your address into a search engine website.","ordinary_dob_error_provideReason":"Please provide a reason","ordinary_postalVote_postalVote_emailAddress_label":"Email address","ordinary_nino_example":"Example: QQ 12 34 56 C","feedback_contact_name_label":"Name","ordinary_confirmation_postalVote_emailDelivery":"I want you to email a postal vote application form to:","ordinary_previousAddress_manual_postcode_label":"Postcode","ordinary_previousName_hasPreviousName_label":"Have you changed your name in the last 12 months?","format.numeric":"Numeric","ordinary_address_manual_title":"What is your address?","step_continue":"Continue","ordinary_name_firstName_label":"First name","ordinary_confirmation_dob_title":"Date of birth","ordinary_nationality_title":"What is your nationality?","ordinary_address_postcode_title":"What is your address?","complete_sentApplicationTo_p":"We've sent your application to","ordinary_nationality_other_country":"Add another country","ordinary_openRegister_content_1":"The open register is an extract of the electoral register, but is not used for elections. It can be bought by any person, company or organisation. For example, it is used by businesses and charities to confirm name and address details.","step_question":"Question","ordinary_address_postcode_enterPostcodeWhenRegistering_p":"Enter the postcode where you want to register to vote.","format.date":"Date ('{0}')","ordinary_country_wales":"Wales","exit_tooYoung_title":"Sorry, you can’t register to vote yet","ordinary_previousName_hasPreviousName_no_label":"No<span class=\"visuallyhidden\"> I haven’t changed my name in the last 12 months</span>","ordinary_previousAddress_title":"Have you moved out of another address in the last 12 months?","step_a_of_b":"{0} of {1}","ordinary_name_title":"What is your full name?","back_button":"Back","ordinary_name_error_enterFirstName":"Please enter your first name","ordinary_confirmation_contact_byEmail":"By email: {0}","ordinary_otheraddr_ifYouHaveSecondAddr_p2":"If you want to register in two places, make two separate applications through this service. Your local Electoral Registration Office will look at each application and tell you whether you’re allowed to register.","exit_britishIslands_paperRegistration":"But you may be able to register to vote in UK elections using a paper form. Download and complete an <a href=\"http://www.aboutmyvote.co.uk/register_to_vote/british_citizens_living_abroad.aspx\" rel=\"external\">'Overseas voter' form</a> from About my Vote.","ordinary_data-toggle-text":"Why are there two registers?","ordinary_previousAddress_select_cannotFindAddress":"I can’t find my address in the list","ordinary_confirmation_nationality_noNationalityReason":"I cannot provide my nationality because:","ordinary_confirmation_dob_noDOBOver70":"I am over 70 years old","ordinary_nationality_removeCountry":"Remove","ordinary_nationality_autocomplete_status":"available, use up and down arrow keys to navigate","ordinary_postalVote_help_content_1":"We’ll send your ballot paper to the address you choose. Then you fill it in and return it by post.","complete_whatHappensNext_h2":"What happens next","complete_yourRefNumberIs":"Your reference number is","exit_tooYoung_moreAboutVoting":"More about voting in the UK.","ordinary_address_postcode_ifYouCantProvideAddress_h4":"If you can’t provide an address","ordinary_address_postcode_ifYouAreLongTermPatient_p":"If you’re a long term patient in a psychiatric hospital, use the address of the hospital.","ordinary_previousAddress_manual_city_label":"Town or city","ordinary_dob_error_enterMonth":"Please enter your month of birth","ordinary_nationality_addAnotherCountry":"add another country","ordinary_address_error_postcodeIsNotValid":"Your postcode is not valid"};
return f})()