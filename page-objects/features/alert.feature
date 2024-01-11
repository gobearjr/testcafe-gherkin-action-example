@AlertFeature
Feature: Alert Feature

Scenario: User click on JS alert
Given User go to alert page
When User click js alert
Then User will see alert : You successfully clicked an alert

Scenario: User click on JS confirm
Given User go to alert page
When User click js confirm : OK
Then User will see confirm : OK

Scenario: User click on JS confirm
Given User go to alert page
When User click js confirm : Cancel
Then User will see confirm : Cancel

Scenario: User click on JS prompt
Given User go to alert page
When User click js prompt
Then User will see confirm : input value