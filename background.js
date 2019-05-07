var interval = 30 // minutes
var msInterval = interval * 60 * 1000 // milliseconds 
var alarm = new Date()

// align minutes neatly to interval
alarm.setTime(alarm.getTime() - (alarm.getTime() % msInterval)) 

// if alarm is in the past, set it to next interval
if (alarm.getTime() < Date.now())
	alarm.setMinutes(alarm.getMinutes() + interval)

browser.alarms.create('', {
	periodInMinutes: interval,
	when: alarm.getTime()
})

browser.alarms.onAlarm.addListener((alarm) => {
	browser.notifications.create('time-log', {
		type: "basic",
		title: "Time Log Reminder",
		message: `Time to jot down your activities for the past ${interval} minutes!`,
		iconUrl: 'icon.svg'
	})
})