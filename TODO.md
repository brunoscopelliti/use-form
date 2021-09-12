# TODOs

* [-] Form validation, and submit handling. (Base functionality).

      - [x] Radio buttons, and checkboxs group work a bit differently;
            In particular checkboxs group could have more than one value,
            eg. What do you like: [] pizza [] ice-cream [] hamburger ..

      - [x] Form fields might have an initial value

      - [x] Different validations

            - [x] date
            - [x] format
            - [x] max-length
            - [x] min-length
            - [x] one-of
            - [x] range
            - [x] required

            - [x] all the above could be applied condionally,
                  depending on the current state of the form;
                  eg. field B must have min-length 4, only if
                  field A is set.

      - [ ] Possibility to extend built-in validations

* [x] The content of the form changes dinamically depending on the 
      user's interaction with the form itself.

* [ ] Same field name can be either readonly input or select.

* [ ] Reset button


