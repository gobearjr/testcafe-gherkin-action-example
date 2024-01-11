@CompFeature
Feature: Search Computer Feature

    @ValidName
    Scenario Outline: Search for valid computer with title "<compName>"
    Given User go to computer page
    When User search for computer name "<compName>"
    Then User see searched computer name "<compName>" on the list
    Examples:
        | compName |
        | ACE     |
        | HP     |
        | Apple |

    @InvalidName
    Scenario: Search for invalid computer with title "<compName>"
    Given User go to computer page
    When User search for computer name "<compName>"
    Then User didn't see searched computer on the list
    Examples:
        | compName |
        | xqaqa     |
        | ptrlk  |