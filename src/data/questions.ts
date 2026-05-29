export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const motorcycleQuestions: Question[] = [
  {
    id: 1,
    question: "Under Minnesota law, who must wear a DOT-approved helmet while riding a motorcycle?",
    options: [
      "All operators and passengers under age 18, and anyone operating with a motorcycle instruction permit",
      "Only the operator, regardless of age, while passengers under 21 do",
      "Only riders operating on interstate highways with speed limits over 55 mph",
      "All riders, without exception, regardless of age or license status"
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law requires all motorcycle riders under age 18 and any operator riding under an instruction permit to wear an approved safety helmet."
  },
  {
    id: 2,
    question: "If your motorcycle is equipped with a high windshield, are you still required to wear eye protection under Minnesota law?",
    options: [
      "No, an integrated windshield satisfies all legal eye protection requirements",
      "Yes, eye protection (visor, goggles, or glasses) is legally required for all operators and passengers",
      "Only if you are riding on unpaved gravel roads or in rainy conditions",
      "Only passengers are required to wear eye protection under such conditions"
    ],
    correctAnswerIndex: 1,
    explanation: "Under Minnesota law, all motorcycle operators and passengers must wear eye protection (such as goggles, safety glasses, or a helmet shield) even if the motorcycle is equipped with a windshield."
  },
  {
    id: 3,
    question: "Operating a motorcycle with a Minnesota instruction permit carries which restriction regarding hours of travel?",
    options: [
      "Riders are prohibited from operating a motorcycle at night",
      "Riders may only ride between 9:00 AM and 5:00 PM on weekdays",
      "Riders are prohibited from riding during heavy morning rush hours",
      "There are no time-of-day restrictions for permit holders"
    ],
    correctAnswerIndex: 0,
    explanation: "A Minnesota motorcycle instruction permit strictly prohibits night riding (after dark) and carrying passengers."
  },
  {
    id: 4,
    question: "Under a Minnesota motorcycle instruction permit, who is legally allowed to ride as a passenger on your motorcycle?",
    options: [
      "A licensed motorcycle instructor only",
      "An immediate family member over age 21",
      "No passengers are permitted under any circumstances",
      "Anyone, provided they wear a DOT-approved helmet"
    ],
    correctAnswerIndex: 2,
    explanation: "Riders operating with a Minnesota motorcycle instruction permit are strictly prohibited from carrying any passengers."
  },
  {
    id: 5,
    question: "Under normal riding conditions on a dry road, what is the minimum safe following distance behind another vehicle?",
    options: [
      "A minimum of one second",
      "A minimum of two seconds",
      "A minimum of four seconds",
      "A minimum of five car lengths"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota manual recommends maintaining a minimum following distance of two seconds behind the vehicle ahead to allow adequate time to react, swerve, or stop."
  },
  {
    id: 6,
    question: "To be most visible to a driver directly in front of you, which portion of the lane should you generally occupy?",
    options: [
      "The left portion of the lane",
      "The center portion of the lane, where you can be seen in their rearview mirror",
      "The right portion of the lane, close to the shoulder",
      "The exact lane divider line"
    ],
    correctAnswerIndex: 1,
    explanation: "Riding in the center portion of the lane generally places you directly in the rearview mirror of the driver ahead, making you easier to spot."
  },
  {
    id: 7,
    question: "To stop as quickly and safely as possible in an emergency situation, you should:",
    options: [
      "Squeeze the front brake firmly and tap the rear brake repeatedly to pump it",
      "Apply both front and rear brakes firmly and smoothly at the same time",
      "Apply the rear brake hard only to prevent front-wheel lockup",
      "Slam on the front brake and lean the motorcycle to slide on its side"
    ],
    correctAnswerIndex: 1,
    explanation: "Using both brakes simultaneously to their maximum potential, without locking either wheel, provides the shortest and safest stopping distance."
  },
  {
    id: 8,
    question: "Approximately how much of your motorcycle's total stopping power is provided by the front brake?",
    options: [
      "About 25 percent",
      "About 50 percent",
      "At least 70 percent",
      "Only about 10 percent"
    ],
    correctAnswerIndex: 2,
    explanation: "The front brake is highly powerful and provides at least 70 percent of your motorcycle's total stopping power."
  },
  {
    id: 9,
    question: "To initiate a turn at speeds above 15 mph on a motorcycle, what action must you take?",
    options: [
      "Turn the handlebars in the direction of the turn and lean opposite",
      "Press the handlebar grip in the direction of the turn (press left to turn left)",
      "Pull the handlebar on the opposite side of the turn towards you",
      "Shift your weight to the inside without moving the handlebars"
    ],
    correctAnswerIndex: 1,
    explanation: "To turn a motorcycle at speeds above 15 mph, you must countersteer by pressing the handlebar in the direction of the turn (press left, lean left, turn left)."
  },
  {
    id: 10,
    question: "While taking a turn on a motorcycle, how should you adjust your throttle to maintain maximum stability?",
    options: [
      "Roll off the throttle completely to slow down during the turn",
      "Keep the throttle steady or roll on slightly to maintain traction",
      "Accelerate aggressively midway through the turn to raise the bike",
      "Pull in the clutch lever and coast silently through the turn"
    ],
    correctAnswerIndex: 1,
    explanation: "A steady throttle or slight, smooth acceleration through a turn stabilizes the suspension, maintains motorcycle balance, and keeps tire traction constant."
  },
  {
    id: 11,
    question: "If you must ride over an unavoidable hazard (like a small log or road debris), what is the correct technique?",
    options: [
      "Approach at a 45-degree angle while braking heavily on the debris",
      "Rise slightly off the seat, keep your knees squeezed against the tank, and approach at a 90-degree angle",
      "Sit back firmly on the seat and accelerate quickly as you cross",
      "Pull in the clutch and lean the motorcycle as far right as possible"
    ],
    correctAnswerIndex: 1,
    explanation: "Slightly rising off the seat allows your legs to act as natural shock absorbers, and crossing at a 90-degree angle minimizes the risk of your tires sliding off the object."
  },
  {
    id: 12,
    question: "When starting to ride in the rain, when is the road surface typically the most slippery?",
    options: [
      "Just as it begins to rain, when oil and grease mix with water before washing away",
      "After several hours of continuous heavy rain",
      "The next morning, when dew forms on the cold asphalt",
      "As soon as the sun comes out and begins drying the rain"
    ],
    correctAnswerIndex: 0,
    explanation: "Oil and grease accumulate on roads over time. When rain first starts, these substances rise to the surface of the wet film, creating extremely slick conditions before the rainfall washes them off to the sides."
  },
  {
    id: 13,
    question: "For riders age 21 or older in Minnesota, what is the legal blood alcohol concentration (BAC) limit at which you are considered driving under the influence (DWI)?",
    options: [
      "0.02 percent or higher",
      "0.05 percent or higher",
      "0.08 percent or higher",
      "0.10 percent or higher"
    ],
    correctAnswerIndex: 2,
    explanation: "In Minnesota, operating any motor vehicle (including a motorcycle) with a Blood Alcohol Concentration (BAC) of 0.08% or higher is illegal."
  },
  {
    id: 14,
    question: "Under Minnesota's Implied Consent Law, if an officer suspects you of riding under the influence and requests a breath test, what does refusal result in?",
    options: [
      "An automatic 30-day suspension of riding privileges with no fines",
      "Immediate revocation of your license for a minimum of one year and a criminal charge",
      "No penalty, as chemical testing is strictly voluntary in Minnesota",
      "A verbal warning and a requirement to attend a motorcycle safety course"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota's Implied Consent Law dictates that operating a motor vehicle automatically consents you to chemical testing. Refusal to cooperate results in an immediate, mandatory revocation of your license for one year and a separate criminal charge."
  },
  {
    id: 15,
    question: "Under Minnesota law, which passenger on a motorcycle must wear a DOT-approved safety helmet?",
    options: [
      "All passengers, regardless of age",
      "Only passengers under 18 years of age",
      "Only passengers over 65 years of age",
      "No passengers are required to wear helmets as long as the operator is over 21"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota helmet laws require all motorcycle operators and passengers under 18 years of age to wear a DOT-approved safety helmet."
  },
  {
    id: 16,
    question: "When riding in a group of motorcycles under ordinary highway conditions, what is the recommended formation?",
    options: [
      "Single file, directly behind one another in the center portion of the lane",
      "A staggered formation, with the leader in the left third and the next rider in the right third",
      "Side-by-side in pairs to maximize lane usage",
      "A V-shape, occupying multiple highway lanes simultaneously"
    ],
    correctAnswerIndex: 1,
    explanation: "A staggered formation is the most effective way for a group of riders to stay close together while maintaining a safe following distance and clear paths for sudden maneuvers."
  },
  {
    id: 17,
    question: "When riding in a group, when should you switch from a staggered formation to a single-file line?",
    options: [
      "When riding through sharp curves, narrow bridges, or entering and exiting highways",
      "When riding on long, straight interstate highways",
      "When the weather is clear and traffic is extremely light",
      "When stopping at traffic lights or stop signs"
    ],
    correctAnswerIndex: 0,
    explanation: "Staggered formations should transition to single-file during curves, lane restrictions, bad road conditions, narrow paths, or when entering/exiting highways to give each rider maximum space to manage hazards."
  },
  {
    id: 18,
    question: "Where should an inexperienced or novice rider be placed when riding within a group?",
    options: [
      "At the very front, leading the group",
      "Directly behind the leader (the second position in the group)",
      "At the very back of the group, behind the sweep rider",
      "In any random position, as long as they stay close to the others"
    ],
    correctAnswerIndex: 1,
    explanation: "Placing an inexperienced rider in the second position (just behind the leader) allows the leader to monitor their pace while keeping them ahead of other experienced riders who can assist if needed."
  },
  {
    id: 19,
    question: "Under Minnesota's lane filtering laws (effective July 1, 2025), a motorcycle operator is permitted to filter between lanes of stopped or slow-moving traffic only if:",
    options: [
      "The speed limit is 70 mph and traffic is moving at 60 mph",
      "The vehicle speed does not exceed 25 mph and does not exceed the speed of surrounding traffic by more than 15 mph",
      "The motorcycle is equipped with emergency flashers and extra side luggage",
      "They are trying to catch up to a group of other riders"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota's lane filtering law allows riding gently between lanes of slow traffic under strict limits: speed of the motorcycle must not exceed 25 mph, and must not exceed surrounding vehicles by more than 15 mph."
  },
  {
    id: 20,
    question: "Under Minnesota law, a maximum of how many motorcycles are permitted to operate side-by-side (abreast) in a single traffic lane?",
    options: [
      "Only one, side-by-side riding is strictly illegal",
      "No more than two motorcycles",
      "Up to three motorcycles, as long as they maintain a staggered pattern",
      "There is no limit on how many motorcycles can share a single lane"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law permits a maximum of two motorcycles to ride abreast (side-by-side) in a single lane with the consent of both operators. It is illegal to ride more than two abreast."
  },
  {
    id: 21,
    question: "Which part of the traffic lane typically accumulates the most oil, grease, and fluid drippings from other vehicles?",
    options: [
      "The left wheel track portion",
      "The right wheel track portion",
      "The center portion of the lane",
      "The gravel on the outside shoulder"
    ],
    correctAnswerIndex: 2,
    explanation: "Cars and trucks drip oil and fluids down the middle of the lane. Consequently, the center strip of a lane becomes extremely slick and oily, especially in damp conditions."
  },
  {
    id: 22,
    question: "When you come to a complete stop at an intersection or traffic light, what gear should your motorcycle be in?",
    options: [
      "Neutral, so you can rest your hands off the handlebar",
      "First gear, with your clutch pulled in, so you can move quickly if needed",
      "Second gear, to prevent accidental wheel spin when starting",
      "Highest gear, to stay prepared for high-speed cruising"
    ],
    correctAnswerIndex: 1,
    explanation: "Remaining in first gear with the clutch pulled in keeps you ready to accelerate out of harm's way if a vehicle approaches rapidly or fails to stop behind you."
  },
  {
    id: 23,
    question: "In Minnesota, how and when must your motorcycle headlight be operated?",
    options: [
      "Only from 30 minutes after sunset to 30 minutes before sunrise",
      "Only during rain, snow, fog, or bad weather",
      "At all times when operating on a public street or highway",
      "Only when you are riding in dense residential districts"
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota law requires that a motorcycle’s headlight (or designated daytime running lights) must be illuminated at all times during operation to ensure better visibility for other motorists."
  },
  {
    id: 24,
    question: "During daylight hours, is it legal and recommended to ride with your motorcycle's headlight on high beam?",
    options: [
      "No, high beams are strictly illegal to use during daylight",
      "Yes, using high beams during the day makes you more visible to oncoming traffic",
      "Only when you are actively passing a vehicle on a two-lane road",
      "No, because daytime high beams will blind drivers coming from the other direction"
    ],
    correctAnswerIndex: 1,
    explanation: "Statutes and safety manuals recommend using your high beam in daylight to help highlight your presence to oncoming motorists, provided it doesn't blind others."
  },
  {
    id: 25,
    question: "In Minnesota, a U-Turn is prohibited near a curve or hill crest unless the vehicle is visible from both directions for at least:",
    options: [
      "200 feet",
      "500 feet",
      "1,000 feet",
      "1,500 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "In Minnesota, a U-Turn is illegal on any curve or hill crest where your vehicle cannot be seen by drivers approaching from either direction within 1,000 feet."
  },
  {
    id: 26,
    question: "If your motorcycle's front wheel begins to wobble or shake at high speeds, you should:",
    options: [
      "Accelerate aggressively to pull the wheel straight and stable",
      "Slam on the front brake to halt the shake immediately",
      "Grip the handlebars firmly, ease off the throttle smoothly, and avoid immediate braking",
      "Lean far back on the seat and pull the handlebars forcefully to one side"
    ],
    correctAnswerIndex: 2,
    explanation: "Grip the bars firmly but don't fight the wobble. Roll off the throttle smoothly. Braking or pulling the bars sharply can worsen the instability and cause a loss of control."
  },
  {
    id: 27,
    question: "If your rear tire suddenly blows out or goes flat while riding, you should react by:",
    options: [
      "Applying the rear brake hard immediately to slide to a stop",
      "Grip the handlebars firmly, ease off the throttle, and apply the front brake gently if braking is necessary",
      "Leaning the motorcycle as far into the curb as possible",
      "Shifting weight completely to the side of the flat tire"
    ],
    correctAnswerIndex: 1,
    explanation: "In a tire blowout, ease off the throttle smoothly, ride straight, and apply the brake on the non-affected wheel (the front) gently if you need to slow down. Applying the rear brake on a flat rear tire can throw the bike out of control."
  },
  {
    id: 28,
    question: "When being passed by a large truck, which lane position is safest for a motorcyclist to adopt?",
    options: [
      "The left portion of the lane, close to the truck to stay out of blind spots",
      "The right portion of the lane, near the shoulder, to escape wind gusts",
      "The center portion of the lane, maintaining a buffer zone from wind turbulence",
      "Riding on the paved shoulder until the truck completes the pass"
    ],
    correctAnswerIndex: 2,
    explanation: "Riding in the center portion of the lane maintains an optimal safety buffer from wind eddies and gusts generated as a large truck moves past."
  },
  {
    id: 29,
    question: "Why must you perform a head check (looking over your shoulder) before changing lanes, despite checking your rearview mirrors?",
    options: [
      "Because mirrors do not show vehicles traveling directly next to or slightly behind you",
      "Because head checks are required to keep your neck muscles loose",
      "To signal to other drivers that you are about to change lanes",
      "Mirrors are never reliable due to motorcycle vibration"
    ],
    correctAnswerIndex: 0,
    explanation: "Rearview mirrors have blind spots. Checking over your shoulder is the only way to verify that a vehicle is not driving directly beside or slightly behind you in your blind zone."
  },
  {
    id: 30,
    question: "If you must cross railroad tracks that run parallel to your lane of travel, what is the safest crossing angle?",
    options: [
      "Cross them at an angle of at least 45 degrees",
      "Cross them at a very sharp 10-degree angle to finish the crossing faster",
      "Ride on the metal rails until there is a wide gap in traffic",
      "Slowly ride directly on top of the rail until the next intersection"
    ],
    correctAnswerIndex: 0,
    explanation: "To cross tracks running parallel or near-parallel to your course safely without catching your tires in the iron tracks, you should steer away and cross at an angle of at least 45 degrees."
  },
  {
    id: 31,
    question: "If your rear wheel locks and begins to skid during a hard stop on clean pavement, you should:",
    options: [
      "Release the rear brake immediately to restore wheel spin",
      "Keep the rear wheel locked and steer straight until you come to a complete stop",
      "Slam on the front brake to balance the motorcycle",
      "Lean the motorcycle heavily in the opposite direction of the skid"
    ],
    correctAnswerIndex: 1,
    explanation: "If the rear wheel locks on clean asphalt, keep it locked until stopped. Releasing a locked rear wheel while it is out of alignment with the front can cause a violent high-side crash."
  },
  {
    id: 32,
    question: "Under Minnesota state statutes, what is the minimum legal tread depth required for motorcycle tires?",
    options: [
      "1/32 of an inch",
      "2/32 (or 1/16) of an inch",
      "3/32 of an inch",
      "4/32 of an inch"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law prohibits operating a motorcycle with a tire tread depth of less than 2/32 inch (or 1/16 inch) measured at any point on the tire."
  },
  {
    id: 33,
    question: "When riding over slippery metal bridge gratings or open steel expansion joints, what is the safest technique?",
    options: [
      "Weave back and forth to keep traction edge patterns engaged",
      "Ride straight, maintain a steady speed, and avoid sudden acceleration or hard braking",
      "Downshift two gears and accelerate aggressively across",
      "Pull in the clutch and drag both feet for balance"
    ],
    correctAnswerIndex: 1,
    explanation: "Metal gratings wiggle the motorcycle slightly. Staying relaxed, riding straight, maintaining a steady throttle, and avoiding sudden control changes prevents a slide."
  },
  {
    id: 34,
    question: "Road markings (like arrows, lines, or crosswalk paint) become extremely hazardous for motorcyclists under what weather condition?",
    options: [
      "Only when they are heated under direct intense summer sunlight",
      "When they are wet from rain, as the painted surface is non-porous",
      "When the air temperature drops below freezing but roads remain completely dry",
      "Paint markings do not pose any traction threat to motorcycles"
    ],
    correctAnswerIndex: 1,
    explanation: "Wet painted road markings and steel utility covers offer zero traction, behaving like ice. You should avoid braking or leaning heavily while riding on them in wet weather."
  },
  {
    id: 35,
    question: "To provide the best protection against flying debris, dust, and insects, a helmet face shield should be:",
    options: [
      "Made of impact-resistant material and kept clean of scratches",
      "Tinted dark, even when riding at night",
      "Opened up slightly to allow maximum airflow directly to your eyes",
      "Satisfied by standard prescription eyeglasses or sunglasses"
    ],
    correctAnswerIndex: 0,
    explanation: "A face shield must be impact-resistant and transparent (free of scratches which scatter light and impair vision) to safely defend against bugs, pebbles, and rushing air."
  },
  {
    id: 36,
    question: "Under Minnesota law, if a motorcycle carries a passenger, the motorcycle must have:",
    options: [
      "A sidecar attached to the frame",
      "An engine of at least 500cc displacement",
      "A dedicated seat and permanent separate footrests for the passenger",
      "A high windshield and integrated rear roll cage"
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota law mandates that any motorcycle carrying a passenger must have a passenger seat and separate passenger footrests."
  },
  {
    id: 37,
    question: "When parking your motorcycle against a curb, you should ideally park at:",
    options: [
      "A 90-degree angle with the front tire touching the curb",
      "An angle with the rear wheel touching the curb",
      "Perfectly parallel with both tires touching the curb",
      "On the sidewalk aligned with the entry door"
    ],
    correctAnswerIndex: 1,
    explanation: "Parking at an angle with the rear wheel touching the curb keeps the bike stable and prevents it from rolling or sliding, while making it more visible to other parking vehicles."
  },
  {
    id: 38,
    question: "When approaching a curve or sharp bend, when should you adjust your speed by slowing down?",
    options: [
      "Before you enter the curve, while the motorcycle is still fully upright",
      "Directly in the middle portion of the curve",
      "As you are exiting the curve and accelerating away",
      "Only if you feel the tires starting to lose traction"
    ],
    correctAnswerIndex: 0,
    explanation: "Always complete all deceleration and braking BEFORE entering the curve. Braking inside a curve reduces traction available for leaning and can cause a slide."
  },
  {
    id: 39,
    question: "If you must swerve to avoid an obstacle, what is the golden rule regarding braking?",
    options: [
      "Brake hard with both brakes while you are leaning the motorcycle to swerve",
      "Do NOT brake while swerving; complete the swerve first, then apply your brakes if needed",
      "Apply the rear brake only while initiating the swerve",
      "Squeeze only the front brake as hard as possible during the swerve"
    ],
    correctAnswerIndex: 1,
    explanation: "Any braking during a hard turn or swerve can lock the wheels and cause an immediate crash. You should separate braking from swerving: swerve first, then brake once the bike is upright and straight."
  },
  {
    id: 40,
    question: "Riding a motorcycle in warm weather can cause extreme fluid loss and fatigue. To combat dehydration, a rider should:",
    options: [
      "Drink plenty of water before and during the ride, and rest frequently",
      "Drink caffeinated or alcoholic energy drinks to stay alert",
      "Ride faster to increase the cooling wind effect",
      "Avoid wearing a jacket or protective gear to keep the skin cool"
    ],
    correctAnswerIndex: 0,
    explanation: "Riding causes rapid invisible evaporation of sweat. Drink plenty of water and take frequent breaks. Wearing safety gear actually insulates you from hot winds that hasten dehydration."
  },
  {
    id: 41,
    question: "What does the first letter 'S' stand for in the motorcycle safety acronym S.I.P.D.E.?",
    options: [
      "Shift (checking gear engagement before turning)",
      "Scan (searching ahead for potential hazards)",
      "Swerve (practicing quick evasion maneuvers)",
      "Speed (maintaining a constant pace through traffic)"
    ],
    correctAnswerIndex: 1,
    explanation: "S.I.P.D.E. stands for Scan, Identify, Predict, Decide, and Execute. 'Scan' refers to systematically searching the road environment ahead for hazards."
  },
  {
    id: 42,
    question: "Which of the following offers the best protection for your feet and ankles while riding?",
    options: [
      "Lightweight canvas sneakers with high tops",
      "Sturdy, over-the-ankle leather boots with non-slip soles",
      "Heavy steel-toed sandals or flip-flops",
      "Standard running shoes with double-tied laces"
    ],
    correctAnswerIndex: 1,
    explanation: "Over-the-ankle leather boots with low heels protect against foot and ankle injuries, exhaust pipe burns, and flying debris while walking or holding up the bike."
  },
  {
    id: 43,
    question: "What is the 'friction zone' on a motorcycle?",
    options: [
      "The warm center portion of the tire contact patch",
      "The area of clutch travel where power starts to transfer to the rear wheel",
      "The heat built up inside the brake calipers during heavy braking",
      "The contact area between the brake lever and your fingers"
    ],
    correctAnswerIndex: 1,
    explanation: "The friction zone is the small range of clutch lever travel where the clutch plates start to touch, transmitting power to the rear wheel. It is used to get rolling smoothly."
  },
  {
    id: 44,
    question: "If a dog begins chasing your motorcycle while you are riding, what is the recommended defense strategy?",
    options: [
      "Kick at the dog to scare it away",
      "Stop immediately and yell at the dog",
      "Slow down as you approach the dog, then accelerate cleanly to break its interception line",
      "Swerve violently into the other lane to outmaneuver the dog"
    ],
    correctAnswerIndex: 2,
    explanation: "Dogs intercept based on matching your trajectory. By slowing down as you approach and then accelerating out of its path, you throw off its timing and intercept angle safely."
  },
  {
    id: 45,
    question: "When carrying extra cargo or a heavy passenger on a motorcycle, what adjustment should you make to the motorcycle's load?",
    options: [
      "Place all heavy items as high and as far backward as possible",
      "Keep the load low and distribute weight evenly on both sides",
      "Overinflate the front tire to handle the extra load weight",
      "Keep the heavy items in a backpack worn high on the passenger"
    ],
    correctAnswerIndex: 1,
    explanation: "Heavy items should be kept low and close to the center of gravity (such as in saddlebags or low tank bags) and balanced evenly to maintain the motorcycle's handling equilibrium."
  },
  {
    id: 46,
    question: "Why must you check your turn signals to ensure they are off after completing a turn?",
    options: [
      "To prevent burning out the alternator fuse prematurely",
      "To avoid confusing other drivers who might think you plan to turn again",
      "Because Minnesota motorcycle signals are legally required to blink only 5 times",
      "To preserve the battery power for the headlight"
    ],
    correctAnswerIndex: 1,
    explanation: "Unlike cars, many motorcycle signals do not self-cancel. Leaving a blinker on can mislead other motorists into pulling out in front of you, thinking you are turning."
  },
  {
    id: 47,
    question: "Where is the engine cut-off switch located and what is its primary purpose?",
    options: [
      "On the left handlebar, to adjust idle speed during cold starts",
      "On the right handlebar, to shut down the engine quickly without removing your hands from the grips",
      "Near the fuel petcock, to prevent fuel leaks while parking",
      "Under the seat, as an anti-theft ignition interlock system"
    ],
    correctAnswerIndex: 1,
    explanation: "The engine cut-off switch is located on the right handlebar grip so you can stop the motor immediately in an emergency without letting go of the steering controls."
  },
  {
    id: 48,
    question: "When riding in a group, why is a staggered formation preferred over riding side-by-side?",
    options: [
      "Riding side-by-side doesn't allow each rider room to swerve or brake safely in their block",
      "Staggered formations look more intimidating and clear traffic faster",
      "Side-by-side riding is only allowed on highways with speed limits under 30 mph",
      "It makes it easier for cars to squeeze in between the riders"
    ],
    correctAnswerIndex: 0,
    explanation: "Riding side-by-side leaves no safety buffer. If one rider must swerve to avoid a pothole or debris, they will collide with the adjacent rider. A staggered formation maintains safety room."
  },
  {
    id: 49,
    question: "When caught riding in strong crosswinds, what is the best technique to maintain your path?",
    options: [
      "Pull over immediately and park on the lane divider line",
      "Stand up on the footpegs to lower the wind resistance profile of the bike",
      "Lean into the wind, grip the handlebars firmly, and maintain a constant, steady speed",
      "Shift into the highest gear possible and weave to reduce drag"
    ],
    correctAnswerIndex: 2,
    explanation: "In high winds, you should lean slightly into the wind to counter its force, keep a firm (but relaxed) grip on the handlebars, and stay alert for gaps in trees or bridges."
  },
  {
    id: 50,
    question: "When planning a long-distance motorcycle road trip, the rider should combat fatigue by:",
    options: [
      "Riding at least 6 hours without taking breaks to finish early",
      "Scheduling frequent rest stops at least every two hours or 100 miles",
      "Drinking energy drinks continuously while riding to suppress drowsiness",
      "Riding only during late night hours when traffic is lighter"
    ],
    correctAnswerIndex: 1,
    explanation: "Motorcycling is more physically and mentally demanding than driving. Taking a break every 2 hours or 100 miles helps keep your reflexes sharp and protects against lapses in concentration."
  },
  {
    id: 51,
    question: "If you encounter gravel, sand, or loose dirt on a paved highway, you should:",
    options: [
      "Lean the bike heavily and accelerate to spin through the debris",
      "Slow down before reaching the loose surface, keep the bike upright, and avoid sudden throttle or brake inputs",
      "Apply the front brake hard to slide through",
      "Swerve aggressively at the last second to clear it completely"
    ],
    correctAnswerIndex: 1,
    explanation: "Loose substances offer very poor traction. Approaching upright, slowing down beforehand, and keeping inputs relaxed and constant keeps the motorcycle stable with minimal risk of slide."
  },
  {
    id: 52,
    question: "When preparing to stop or hold your position on a steep hill or incline, what is the best way to keep the bike from rolling back?",
    options: [
      "Put the transmission in neutral and hold both feet on the ground",
      "Keep the motorcycle in first gear and hold the position using the rear brake",
      "Rely on the front brake only while keeping the transmission in neutral",
      "Keep slipping the clutch at high RPM to keep the bike loaded uphill"
    ],
    correctAnswerIndex: 1,
    explanation: "Using the rear brake to hold the motorcycle on a hill keeps your right hand free to work the throttle and clutch smoothly when pulling away without rolling backward."
  },
  {
    id: 53,
    question: "When passing a row of parked cars on a city street, which hazard should you be most prepared for?",
    options: [
      "A parked car suddenly pulling out into traffic or a driver opening a door into your path",
      "The parked cars blocking oncoming wind from the side",
      "Your headlight reflecting off the side mirrors and blinding you",
      "A high-speed crosswind tunnel generated between the cars"
    ],
    correctAnswerIndex: 0,
    explanation: "Occupants in parked cars often do not check for motorcycles before opening doors or pulling out. Keep a buffer zone and be prepared to swerve or stop."
  },
  {
    id: 54,
    question: "When parking a motorcycle on hot asphalt or a soft surface, you must ensure the bike does not fall by:",
    options: [
      "Leaving the engine running so the vibration holds it up",
      "Placing a small, solid kickstand plate (such as wood or metal) under the kickstand tip",
      "Renting a specialized curb harness whenever parking overnight",
      "Letting half of the air out of both tires to flatten the contact patch"
    ],
    correctAnswerIndex: 1,
    explanation: "On hot summer days, asphalt softens, allowing a kickstand to sink under the weight of the bike. A small plate under the kickstand distributes the pressure and keeps the bike upright."
  },
  {
    id: 55,
    question: "Under standard pre-ride inspection guides, what does the 'T-CLOCS' safety checklist help you inspect?",
    options: [
      "Tires, Controls, Lights, Oils, Chassis, and Stands",
      "Tax, Title, Credentials, License, Registration, and Insurance",
      "Throttle, Clutch, Lubrication, Overdrive, Cable, and Sparkplugs",
      "Traction, Cornering, Leaning, Oversteering, Clearance, and Stopping"
    ],
    correctAnswerIndex: 0,
    explanation: "T-CLOCS is the MSF standard checklist standing for Tires/Wheels, Controls, Lights/Electrics, Oils/Fluids, Chassis, and Stands. It guarantees a safe, reliable ride."
  },
  {
    id: 56,
    question: "When following behind a large semi-truck, what is the best lane position and safe distance to maintain?",
    options: [
      "Ride close to the tail of the truck to save fuel via drafting",
      "Stay far enough back to see the truck's side mirrors, choosing a position where the truck driver can see you",
      "Ride directly in the blind spot behind the tires so cars won't cut in front of you",
      "Always ride right next to the driver's side door to stay visible"
    ],
    correctAnswerIndex: 1,
    explanation: "If you cannot see the truck's side mirrors, the truck driver cannot see you. Keeping a larger following distance also gives you a better view of oncoming road conditions and debris."
  },
  {
    id: 57,
    question: "How should your motorcycle's rearview mirrors be properly adjusted before riding?",
    options: [
      "So you can see the top of your helmet to check its angle",
      "So you can see half of your lane and a portion of the lane next to you",
      "So you see the road directly behind you and the edges of your shoulders",
      "Mirrors should be turned inward to reduce aerodynamic wind drag"
    ],
    correctAnswerIndex: 2,
    explanation: "Adjust mirrors while sitting on the motorcycle in your normal riding position. They should show the road behind you and a sliver of your own arm/shoulder as a reference point."
  },
  {
    id: 58,
    question: "When performing tight, low-speed U-turns or maneuvers (under 5 mph), how should you manage your body position?",
    options: [
      "Lean with the motorcycle as far as possible to keep the center of gravity low",
      "Counterweight by leaning your upper body opposite the turn to keep the bike balanced",
      "Stand fully upright on the footpegs with your hands off the bars",
      "Keep your body stiffly vertical while looking straight down at the front wheel"
    ],
    correctAnswerIndex: 1,
    explanation: "At slow speeds, you balance the bike by counterweighting. Leaning your torso outward (opposite the turn) allows the bike to lean safely under you for a tight turning radius."
  },
  {
    id: 59,
    question: "How does cold weather affect motorcycle riding and tire traction?",
    options: [
      "Traction is increased because cold pavement hardens the tire rubber",
      "Cold temperatures reduce tire pressure and inhibit tires from carving grip, requiring gentler inputs",
      "Tire traction is unaffected unless actual snow or ice is resting on the road",
      "Cold air makes motorcycle brakes twice as powerful as hot weather brakes"
    ],
    correctAnswerIndex: 1,
    explanation: "Cold asphalt and cold tires have significantly lower traction than warm tires. The rubber stays hard and cannot flex into the road surface as easily, demanding smooth, gradual control inputs."
  },
  {
    id: 60,
    question: "If a car is tailgating you (following too closely behind), what is the safest response?",
    options: [
      "Slam on your brakes to teach the driver a lesson",
      "Increase your following distance from the vehicle ahead of you to allow safer stopping space",
      "Look back and gesture angrily at the car driver",
      "Accelerate aggressively to exceed the speed limit and escape them"
    ],
    correctAnswerIndex: 1,
    explanation: "By increasing your following distance from the vehicle in front, you avoid the need for sudden, hard braking. This protects you from being rear-ended if you must slow down."
  },
  {
    id: 61,
    question: "In heavy rain, how do you prevent your motorcycle tires from hydroplaning?",
    options: [
      "Ride in the tire tracks left by the vehicle ahead of you where water has been displaced",
      "Keep throttle fully open to skim quickly across the puddle surface",
      "Apply the rear brake continuously to keep the rear wheel flat on the water",
      "Ride near the road shoulder where standing water is deepest"
    ],
    correctAnswerIndex: 0,
    explanation: "The tire tracks of the vehicle ahead have temporarily displaced standing water, offering better rubber-to-asphalt contact and minimizing hydroplaning risk."
  },
  {
    id: 62,
    question: "Why should a rider be very cautious around dry or wet autumn leaves on a paved road bend?",
    options: [
      "Leaves can cause static electricity that can shock your electrical system",
      "Leaves reflect sunlight and cause blinding glare",
      "Leaves severely reduce traction, and wet leaves act like a layer of ice",
      "Leaves stick to your helmet visor and block your visibility"
    ],
    correctAnswerIndex: 2,
    explanation: "Wet or even dry leaves gathered on corners represent a major traction hazard. They slide under slipping tires, behaving extremely similarly to patches of black ice."
  },
  {
    id: 63,
    question: "For a DOT-approved safety helmet to work correctly, the chin strap must be:",
    options: [
      "Left unfastened to make the helmet easy to remove in an emergency",
      "Fastened securely at all times while riding",
      "Loosened enough to allow two fingers to rest comfortably under your chin",
      "Replaced with an elastic band to absorb heavier impacts"
    ],
    correctAnswerIndex: 1,
    explanation: "A helmet cannot protect your head if it flies off during an initial slide. The chin strap must be buckled securely whenever you operate a motorcycle."
  },
  {
    id: 64,
    question: "What are you doing when you are 'overriding your headlight' at night?",
    options: [
      "Your speed is so fast that your stopping distance exceeds the distance of road illuminated by your headlight",
      "You are operating with your high beams on in a heavily illuminated city street",
      "You have modified your bike with auxiliary LED light bars that draw too much alternator power",
      "You are riding with the headlight turned off to conserve fuel"
    ],
    correctAnswerIndex: 0,
    explanation: "Overriding your headlight means you are riding too fast to stop within the distance you can see. If an obstacle appears inside your beam, you will hit it before you can stop."
  },
  {
    id: 65,
    question: "When slowing down or preparing to turn in an unexpected area, how can you alert vehicles behind you?",
    options: [
      "Wave your arm frantically in circles",
      "Briefly tap your brake lever or pedal multiple times to flash the brake light",
      "Rev your engine repeatedly while holding the clutch in",
      "Turn your hazard flashers on and ride on the shoulder"
    ],
    correctAnswerIndex: 1,
    explanation: "Tapping the clutch-brake lever or foot brake lightly a few times causes the brake light to flash, catching the attention of motorists behind you who might be distracted."
  },
  {
    id: 66,
    question: "In traffic, where is a motorcyclist most likely to enter a passenger car's blind spots?",
    options: [
      "Directly behind the car's bumper",
      "Directly in front of the car's nose",
      "Slightly behind and to the left or right of the car's rear fenders",
      "Occupying the same lane as the car abreast"
    ],
    correctAnswerIndex: 2,
    explanation: "The areas just behind the rear doors of cars are notoriously blind to drivers. Avoid lingering in these pockets; either accelerate past or fall back out of them."
  },
  {
    id: 67,
    question: "What does the official hand signal for 'slow down' look like?",
    options: [
      "Arm extended straight out, pointing towards the vehicle ahead",
      "Left arm extended downward with the palm facing backward and waving down",
      "Arm bent upward at a 90-degree angle with a closed fist",
      "Pointing a finger downwards towards the footpeg"
    ],
    correctAnswerIndex: 1,
    explanation: "The hand signal to slow down or stop is extending your left arm downward with your palm facing down/backward, moving it in a gentle waving gesture."
  },
  {
    id: 68,
    question: "In Minnesota, the Blood Alcohol Concentration (BAC) limit is 0.08% for adults, but what is the legal limit for riders under age 21?",
    options: [
      "0.00% (Absolute Zero tolerance under the zero-tolerance law)",
      "0.02% to allow for natural foods",
      "0.05% if accompanied by a guardian",
      "0.08%, the same as adults"
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota has a strict Zero Tolerance law ('Not a Drop' law) for underage drivers. Any measurable amount of alcohol in a driver under 21 results in immediate loss of license."
  },
  {
    id: 69,
    question: "If you carry external gear or luggage on your motorcycle package rack, you must secure it with:",
    options: [
      "Sturdy elastic bungee cords or webbed straps, checked frequently during your trip",
      "Standard duct tape wrapped around the rear fender",
      "Standard household twine or wool string",
      "Resting it loosely and holding it in place with your shoulder blades"
    ],
    correctAnswerIndex: 0,
    explanation: "Luggage must be carefully anchored. Loose bags or straps can fly into the rear wheel, lock the chain or sprocket, and trigger an immediate major crash."
  },
  {
    id: 70,
    question: "How often should you check and adjust your motorcycle's drive chain slack under normal use?",
    options: [
      "Only when the chain starts making a loud clanging noise",
      "Once every three or four years during oil changes",
      "According to your owner's manual, typically during pre-ride check intervals",
      "Only after riding through deep mud or water"
    ],
    correctAnswerIndex: 2,
    explanation: "Checking your chain's tension and lubrication is part of standard regular inspection. A loose chain can jump off the sprocket and seize the rear wheel instantly."
  },
  {
    id: 71,
    question: "If your motorcycle's throttle gets stuck open while riding in traffic, your first step should be to:",
    options: [
      "Squeeze the clutch lever and hit the engine cut-off switch simultaneously",
      "Stomp hard on the shift peg to force the bike into neutral without clutching",
      "Turn off the key ignition and pull the steering lock",
      "Lean forward and try to manually pull the throttle cable near the engine carb"
    ],
    correctAnswerIndex: 0,
    explanation: "Disengaging the clutch prevents engine power from reaching the tire, and hitting the kill switch safely stops the soaring engine RPMs immediately without losing control."
  },
  {
    id: 72,
    question: "Which clothing colors are most effective at making you visible to other motorists during both day and night?",
    options: [
      "Plush all-black leather with matte finishes",
      "Bright, fluorescent colors (orange, yellow, or green) with retroreflective panels",
      "Soft pastel blues and light grays that blend with skies",
      "Dark ruby reds and deep brown forest tones"
    ],
    correctAnswerIndex: 1,
    explanation: "Fluorescent neon colors attract attention in daytime, while retroreflective materials reflect headlamp beams from other cars, providing maximum night safety."
  },
  {
    id: 73,
    question: "At 50 mph, how does your total stopping distance compare to your stopping distance at 25 mph?",
    options: [
      "It is exactly twice as far",
      "It is about four times as far",
      "It is exactly the same because motorcycle brakes are highly efficient",
      "It is actually shorter because tires are spinning faster"
    ],
    correctAnswerIndex: 1,
    explanation: "Stopping distance increases with the square of your speed. Doubling your speed (from 25 to 50 mph) multiplies the kinetic energy—and thus stopping distance—by approximately four times."
  },
  {
    id: 74,
    question: "When approaching an intersection where a driver is waiting to pull out, how should you use your horn?",
    options: [
      "Honk aggressively and constantly to force them to back up",
      "Give a quick, polite tap of the horn to prompt them to notice you, while preparing to swerve or brake",
      "Never use the horn as it is illegal in residential districts",
      "Only use the horn after they have already collided with you"
    ],
    correctAnswerIndex: 1,
    explanation: "A quick, friendly chirp of your horn can make a distracted driver look up. Never assume they will stay parked, though; always prepare to evade or stop."
  },
  {
    id: 75,
    question: "How does steering a three-wheeled motorcycle (or motorcycle with a sidecar) differ from a standard two-wheeled motorcycle?",
    options: [
      "Three-wheelers do not lean and require you to steer the handlebars in the actual direction of the turn",
      "Three-wheelers are steered using countersteering at all speeds",
      "Three-wheelers cannot make left-hand turns",
      "There is no difference in steering technique"
    ],
    correctAnswerIndex: 0,
    explanation: "Because three-wheeled vehicles remain upright rather than leaning, you steer them directly by pointing the handlebars in your wanted direction (direct steering, not countersteering)."
  },
  {
    id: 76,
    question: "A motorcycle steering head wobble is most often caused by which of the following mechanical or loading issues?",
    options: [
      "A dirty windshield or bent footpegs",
      "Uneven or loose tire pressure, misaligned wheels, or improper cargo weight distribution",
      "Riding with the high beam headlight turned on",
      "Using premium unleaded fuel instead of regular fuel"
    ],
    correctAnswerIndex: 1,
    explanation: "Wobbles happen when steering geometry is unstable. Uneven tire pressure, worn-out steering head bearings, or heavy rear loads cause wobbles at highway speeds."
  },
  {
    id: 77,
    question: "Why can the road surface around toll booths and busy urban intersections become particularly slick in hot weather?",
    options: [
      "Asphalt tar rises to the surface and mixes with leaked engine fluids",
      "The concrete used there is chemically treated to repel tires",
      "High exhaust temperatures melt rubber tire particles on the lane",
      "The heavy vehicle tires polish the stones until they are slippery"
    ],
    correctAnswerIndex: 0,
    explanation: "At toll gates, traffic slow-downs, and cross intersections, stopped cars deposit a large volume of oils/coolants. Heat draws asphalt oils upward, turning wet intersections into slick grease spots."
  },
  {
    id: 78,
    question: "If your motorcycle's FRONT wheel begins to lock up and slide during heavy braking, what should you do immediately?",
    options: [
      "Squeeze the lever even harder to force the wheel past the slide",
      "Release the front brake lever immediately, then reapply it smoothly with less force",
      "Lean forward and press your boots against the ground",
      "Lean the bike to one side to slide on the engine guards"
    ],
    correctAnswerIndex: 1,
    explanation: "A front-wheel lockup results in a near-instant loss of steering and balance. If your front tire skids, release the front brake lever immediately to let the wheel spin and regain steering control, then smoothly re-apply."
  },
  {
    id: 79,
    question: "When riding in foggy or heavy rain storms, how should you adjust your riding habits?",
    options: [
      "Increase following distance to at least 4 seconds, reduce speed, and wear bright reflective gear",
      "Ride closer to the vehicle ahead to stay out of their mist clouds",
      "Keep your eyes focused directly on the front fender",
      "Ride with your hazard lights blinking while weaving in your lane"
    ],
    correctAnswerIndex: 0,
    explanation: "Poor visibility and wet asphalt cut your traction margin. Increasing your following distance to 3-4+ seconds and slowing down gives you precious time to react."
  },
  {
    id: 80,
    question: "Under Minnesota rules, when must you dim your motorcycle's headlight high beams for oncoming vehicles?",
    options: [
      "Within 500 feet of an oncoming vehicle or within 200 feet when following another vehicle",
      "Within 1,000 feet of any vehicle on any road",
      "Only when oncoming drivers flash their lights at you first",
      "A motorcycle is never required to dim high beams because of its small size"
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law restricts high beam use: you must dim your headlight high beam within 500 feet of approaching oncoming vehicles and within 200 feet of vehicles you are following."
  },
  {
    id: 81,
    question: "What is the recommended minimum following distance behind another vehicle under normal, dry riding conditions?",
    options: [
      "1 second",
      "2 seconds",
      "3 seconds",
      "4 seconds"
    ],
    correctAnswerIndex: 1,
    explanation: "A minimum two-second following distance should be maintained behind any vehicle in front of you. This provides adequate time to react, brake, or swerve if necessary."
  },
  {
    id: 82,
    question: "If you must brake while in a curve or turn, what is the safest technique to employ?",
    options: [
      "Apply the front brake with maximum force and lean the motorcycle deeper into the turn",
      "Squeeze both brakes smoothly and progressively with lighter pressure than on a straight, gradually uprighting the motorcycle if possible",
      "Use only the rear brake with maximum pressure to slide the rear tire",
      "Do not use either brake; steer off onto the outer road shoulder to stop"
    ],
    correctAnswerIndex: 1,
    explanation: "When turning, traction is shared between turning forces and braking forces. Applying both brakes smoothly and progressively while gradually uprighting the bike maximizes available traction."
  },
  {
    id: 83,
    question: "When should a motorcycle's tire air pressure be checked for the most accurate reading?",
    options: [
      "Immediately after riding on the highway for an hour",
      "Only when the steering handlebar begins to wobble at low speeds",
      "When the tires are cold, before you start riding",
      "When the air temperature is at least 70 degrees Fahrenheit"
    ],
    correctAnswerIndex: 2,
    explanation: "Tire pressure should be checked when the tires are cold. Riding builds heat, which causes air inside the tire to expand and create an artificially high reading."
  },
  {
    id: 84,
    question: "Which of the following is the most common cause of multi-vehicle collisions involving motorcycles at intersections?",
    options: [
      "Another vehicle tailgating the motorcycle from behind",
      "An oncoming vehicle turning left directly across the motorcycle's oncoming path",
      "A vehicle backing out of a parking space on the right side",
      "A vehicle passing the motorcycle on a multi-lane roadway"
    ],
    correctAnswerIndex: 1,
    explanation: "Over half of all motorcycle-car collisions occur at intersections, and the most common cause is an oncoming vehicle turning left in front of an oncoming motorcycle, usually because the driver failed to notice the rider or misjudged their speed."
  },
  {
    id: 85,
    question: "What does the safety term 'engine braking' mean on a motorcycle?",
    options: [
      "Turning the engine off with the cut-off switch to stop the bike",
      "Slowly downshifting through gears to let the engine's compression slow the bike down",
      "Stomping heavily on the rear brake pedal to lock the drive chain",
      "Operating the clutch lever repeatedly in third gear to coast smoothly"
    ],
    correctAnswerIndex: 1,
    explanation: "Downshifting allows the engine’s internal compression to naturally slow the motorcycle down as you release the clutch, reducing wear on traditional friction brakes."
  },
  {
    id: 86,
    question: "What is the safest way to cross railroad tracks that run parallel or diagonally to your lane of travel?",
    options: [
      "Swerve to cross the tracks at an angle of at least 45 degrees, or closer to 90 degrees if safe, to avoid catching your tires in the tracks",
      "Cross the steel rails as parallel as possible to minimize side-to-side tire slip",
      "Apply the front brake hard exactly as your front tire makes contact with the metal rail",
      "Stand fully on the footpegs and close your eyes to avoid target fixation"
    ],
    correctAnswerIndex: 0,
    explanation: "If you cross tracks at a shallow angle, your tires can get caught in the grooves or slip along the slippery metal edge. Swerving slightly to cross at a wider angle (45° to 90°) is much safer."
  },
  {
    id: 87,
    question: "How can a motorcycle rider increase their visibility to drivers behind them at night?",
    options: [
      "Briefly tap the brake lever or pedal multiple times to flash the brake light when slowing",
      "Turn off the rear tail light to prevent blinding distracted motorists behind you",
      "Ride with your hazard lights blinking while weaving from left to right within your lane",
      "Always ride on the gravel shoulder when riding after midnight"
    ],
    correctAnswerIndex: 0,
    explanation: "Tapping your brake pedal lightly to flash your brake light catches the attention of drivers behind you, signaling that you are slowing down unexpectedly."
  },
  {
    id: 88,
    question: "In cold weather, why are bridges and overpasses particularly hazardous for motorcyclists?",
    options: [
      "They have narrower lanes than normal stretches of highways",
      "They freeze first and can contain patches of ice even when standard roads are dry and clear",
      "They are built from special materials that dissolve motorcycle tire tread",
      "They lack speed limit signs, causing drivers to accelerate excessively"
    ],
    correctAnswerIndex: 1,
    explanation: "Because bridges and overpasses have cold air passing under them rather than insulating earth, they lose heat rapidly and freeze sooner than regular roads."
  },
  {
    id: 89,
    question: "If you must ride over a small obstacle (such as a piece of wood or debris) in your lane, what should you do?",
    options: [
      "Hold the handlebars loosely, lean forward, and apply the front brake right as you hit it",
      "Swerve aggressively at the last millisecond to slide around it",
      "Rise slightly off the seat, keep the motorcycle straight, maintain a steady speed, and hold the handlebars firmly",
      "Lay the motorcycle on its side to slide safely past the obstacle"
    ],
    correctAnswerIndex: 2,
    explanation: "To cross small obstacles safely, keep the bike upright and straight. Rising slightly off the seat lets your legs act as shock absorbers, keeping you in full control."
  },
  {
    id: 90,
    question: "What is a main indicator that your motorcycle tires are worn out and must be replaced?",
    options: [
      "The tire surface shows visible fabric or cord, or tread has worn down to 2/32 inch",
      "The tire rubber feels warm to the touch after a 20-minute ride",
      "You have ridden more than 1,000 miles on the tires",
      "The tire pressure drops by 1 PSI over a three-month period"
    ],
    correctAnswerIndex: 0,
    explanation: "Tires showing visible fabric, cords, cord cracks, or tread depth worn down to 2/32 inch (or down to the built-in wear indicators) lack traction and safety, especially in wet weather."
  },
  {
    id: 91,
    question: "Why is lane sharing or 'lane splitting' between rows of moving cars dangerous?",
    options: [
      "It restricts your escape paths, reduces space buffers, and can shock drivers who do not expect a passing motorcycle",
      "It causes the motorcycle's cooling lines to freeze instantly",
      "It wears out the chain drive sprocket twice as fast",
      "It reduces alternator voltage and dimms the headlight"
    ],
    correctAnswerIndex: 0,
    explanation: "Sharing a lane with a vehicle reduces your safety buffer, puts you directly inside driver blind spots, and leaves you with no escape path if a vehicle moves suddenly."
  },
  {
    id: 92,
    question: "If your rear tire blows out or goes flat while riding on a highway, how should you react?",
    options: [
      "Apply the front brake with maximum force and steer toward the ditch immediately",
      "Ease off the throttle gradually, avoid sudden braking, keep a firm grip, and coast to a safe stop on the road shoulder",
      "Shift the motorcycle into neutral and lean into the opposite lane",
      "Stomp hard on the rear brake to lock the tire and prevent the wheel spinning"
    ],
    correctAnswerIndex: 1,
    explanation: "A rear flat can cause the rear of the bike to slide or sway. Gradual deceleration, steering straight with a firm grip, and avoiding sudden brake inputs will help you roll safely to the shoulder."
  },
  {
    id: 93,
    question: "What does an orange diamond-shaped construction sign with a motorcycle symbol and a bumpy texture mean?",
    options: [
      "A motorcycle racing event is occurring ahead in the right lane",
      "A motorcycle parking area is located 1,000 feet ahead",
      "Road construction has left uneven pavements, grooved surfaces, or loose gravel that requires caution",
      "You must accelerate to clear a dirt path quickly"
    ],
    correctAnswerIndex: 2,
    explanation: "Orange warning signs denote temporary construction hazards, such as milled pavement, loose gravel, or steel plates, which can compromise stable two-wheeled traction."
  },
  {
    id: 94,
    question: "Why do motorcycles have headlights wired to turn on automatically whenever the ignition is on?",
    options: [
      "To prevent excess battery voltage build-ups while riding",
      "To maximize the motorcycle's daytime visibility to on-path cars, helping prevent collisions",
      "To warm up the headlight bulb prior to a evening ride",
      "State laws require you to burn off surplus alternator current"
    ],
    correctAnswerIndex: 1,
    explanation: "Continuous daytime headlight operation makes motorcycles much easier to see for oncoming motorists, drastically reducing visibility-related intersection collisions."
  },
  {
    id: 95,
    question: "In countersteering, how do you initiate a turn to the right at speeds above 15 mph?",
    options: [
      "Push forward on the right handlebar grip (press right, turn right)",
      "Pull back on the right handlebar grip with maximum force",
      "Shift your weight to the left side of the seat and look downward",
      "Press down firmly on the left footpeg while keeping the handlebars centered"
    ],
    correctAnswerIndex: 0,
    explanation: "Countersteering at speed is achieved by pushing forward on the handlebar grip in the direction of the desired turn (push right to lean and turn right)."
  },
  {
    id: 96,
    question: "What are warning signs of carbon monoxide poisoning when tuning a motorcycle in a building or garage?",
    options: [
      "Slight skin rash, coughing, and high fever",
      "Headache, dizziness, confusion, nausea, or fatigue",
      "Increased hearing sensitivity and muscle cramps",
      "Rapid steering wobble and brake fade"
    ],
    correctAnswerIndex: 1,
    explanation: "Carbon monoxide is an odorless, poisonous gas. If you experience headache, nausea, or dizziness while operating a bike indoors, shut it off immediately and get fresh air."
  },
  {
    id: 97,
    question: "If you must cross wet wooden deck panels or a wet drawbridge grate, what is the safest technique?",
    options: [
      "Squeeze both front and rear brakes hard to slide sideways",
      "Swerve back and forth continuously to keep the tires warm",
      "Maintain a steady speed, ride straight across, and avoid sudden braking, turning, or acceleration",
      "Accelerate aggressively to spend as little time as possible on the slippery surface"
    ],
    correctAnswerIndex: 2,
    explanation: "Wet wood and metal grates offer extremely poor traction. Keeping the bike upright, maintaining a steady throttle, and avoiding sudden inputs is the only way to traverse them safely."
  },
  {
    id: 98,
    question: "Why are paved roads and intersections particularly slick just after a light rain shower begins?",
    options: [
      "The rain mixes with oil drippings deposited on the road, creating an extremely slippery surface",
      "The rainwater is chemically reactive with motorcycle rubber compounds",
      "The tire tracks of passenger vehicles get instantly flooded",
      "Light rain causes rapid ambient air cooling that dissolves asphalt grip"
    ],
    correctAnswerIndex: 0,
    explanation: "Oils and grease built up on the road surface float on top of the water when rain first falls, making the surface extremely slick until heavier rain washes it away."
  },
  {
    id: 99,
    question: "What is the primary function of the motorcycle's clutch lever?",
    options: [
      "To decelerate the front wheel during a traction slide",
      "To disconnect engine power from the rear wheel to allow gear shifting or starting",
      "To engage the rear locking mechanism when parking on inclines",
      "To toggle the high beam headlight safely from the handlebar"
    ],
    correctAnswerIndex: 1,
    explanation: "The clutch lever on the left handlebar disconnects power from the engine to the rear wheel, allowing you to shift gears, start moving, or hover at a stop without stalling the motor."
  },
  {
    id: 100,
    question: "How can extreme cold temperatures affect your ability to ride a motorcycle safely?",
    options: [
      "It sharpens your sensory nerve endings, enhancing your braking timing",
      "It causes numbness, stiffness, and delays your reaction times, which can lead to hypothermia",
      "It hardens tire rubber to provide twice as much grip on fast corners",
      "It has no measurable physical effects if you wear leather boots"
    ],
    correctAnswerIndex: 1,
    explanation: "Exposure to wind and low temperatures can induce shivering, numb hands, and slow mental reactions. Wearing proper, windproof layers is essential to retain safe operational capacity."
  },
  {
    id: 101,
    question: "When riding in a staggered group alignment, if the rider directly in front of you leaves the group, what should you do?",
    options: [
      "Swerve into their empty track immediately to maintain a tight line",
      "Remain in your position and let the cohort safely re-form its staggered pattern in order",
      "Accelerate to pass the new front rider on the left shoulder",
      "Instantly stop your motorcycle in the lane to consult a map"
    ],
    correctAnswerIndex: 1,
    explanation: "When a rider leaves a staggered format, riders behind should adjust their relative positions within the column context safely to rebuild the stagger, rather than making immediate erratic lane moves."
  },
  {
    id: 102,
    question: "Why is wearing tinted eye protection or a tinted face shield dangerous at night?",
    options: [
      "It causes your motorcycle high beams to reflect inward",
      "It reduces the light reaching your eyes, severely making it difficult to spot black asphalt hazards",
      "It creates static electricity inside the helmet shell",
      "It is only dangerous if you are riding with a passenger"
    ],
    correctAnswerIndex: 1,
    explanation: "Tinted face shields or sunglasses block light. Always switch to a clear face shield or clear goggles when riding from dusk onwards."
  },
  {
    id: 103,
    question: "When steering a motorcycle through a curve, what is the best look strategy?",
    options: [
      "Keep your eyes pinned to the front tire to monitor immediate road contact",
      "Turn your head and keep your eyes focused through the curve toward your desired exit path",
      "Focus your eyes on the solid center lane divider lines",
      "Constantly glance behind you to check for trailing vehicles"
    ],
    correctAnswerIndex: 1,
    explanation: "A motorcycle goes where you look. Turning your head and looking through the entire sweep of a curve is essential for steering a clean, predictable line."
  },
  {
    id: 104,
    question: "What is the primary danger when carrying an inexperienced passenger on your motorcycle?",
    options: [
      "They may lean the opposite way during turns, or shift weight unexpectedly, upsetting your steering balance",
      "They may accidentally adjust your rearview mirrors during normal riding",
      "They will naturally cause your front tire pressure to rise too high",
      "They will constantly look at your dashboard and distract your view"
    ],
    correctAnswerIndex: 0,
    explanation: "Inexperienced passengers may panic and lean opposite the turn, making it very difficult for you to steer. Instruct them to sit still, hold your waist, and lean with the bike."
  },
  {
    id: 105,
    question: "If your rear brake pedal feels spongy and goes all the way down with minimal braking force, this indicates:",
    options: [
      "A normal automatic brake pad self-adjustment process",
      "A dangerous mechanical issue, such as a fluid leak or air in the hydraulic brake line",
      "That the tires are cold and need to be heated up by riding",
      "That the motorcycle engine oil is leaking into the intake"
    ],
    correctAnswerIndex: 1,
    explanation: "A spongy lever or pedal indicates air, contamination, or a fluid leak in the hydraulic line. Do not ride a motorcycle with compromised braking systems."
  },
  {
    id: 106,
    question: "To prevent skidding and achieve the shortest stopping distance under heavy braking, you should:",
    options: [
      "Squeeze both brakes smoothly and progressively up to the limit of traction without locking either tire",
      "Apply the rear brake until the tire locks up, then slide into the stop",
      "Use the front brake only, squeezing with maximum instantaneous force",
      "Shift into neutral and let the wind slow the bike down"
    ],
    correctAnswerIndex: 0,
    explanation: "Applying progressive, smooth force to both brakes up to the edge of traction permits the tires to slow down rapidly, stopping the bike quickly and safely without causing a skid."
  },
  {
    id: 107,
    question: "What is meant by your motorcycle's 'space cushion'?",
    options: [
      "The foam padded seat structure of the bike",
      "A buffer of open space kept on all sides of you in traffic to allow room to react and swerve",
      "The air cushion between your chest and the steering handlebar",
      "An inflatable safety vest worn under your jacket"
    ],
    correctAnswerIndex: 1,
    explanation: "Preserving an ample, open space cushion on all four sides of your bike gives you the critical margin of time and space to react if a motorist does something foolish."
  },
  {
    id: 108,
    question: "When riding behind another vehicle on wet or slick roads, how should you adjust your following distance?",
    options: [
      "Keep it at 1 second to ride in their dry tire spray lanes",
      "Increase it to at least 3 or 4 seconds to assure sufficient reaction time without skidding",
      "Keep it at 2 seconds, the same as dry roads",
      "Pull over and wait for the road to dry completely"
    ],
    correctAnswerIndex: 1,
    explanation: "Slick surfaces have much less traction, which increases braking distances. Expanding your space cushion behind vehicles gives you a much safer buffer."
  },
  {
    id: 109,
    question: "When passing another vehicle on a two-lane highway, what is the best lane approach?",
    options: [
      "Weave close to their rear bumper, honk your horn, and pass on the right-hand unpaved shoulder",
      "Signal, check mirrors and blind spots with a shoulder check, move into the passing lane with a clean space margin, and return with a healthy gap",
      "Ride beside their door in the same lane to force them to yield space",
      "Accelerate to 90 mph immediately without using signals"
    ],
    correctAnswerIndex: 1,
    explanation: "Passing safely requires systematic steps: signal, mirror search, shoulder check (for blind spots), pull out into the opposing lane with plenty of space, accelerate past, and return when you can see their headlight in your mirror."
  },
  {
    id: 110,
    question: "What represents the greatest potential danger when riding through puddles or standing water on the highway?",
    options: [
      "Water spraying onto fuel tanks and washing off polish coatings",
      "Hydroplaning, hidden road hazards (like deep potholes) beneath the water, and wet brakes showing poor responsiveness",
      "Water immediately rusting the motorcycle wheel hubs completely",
      "Water getting into the exhaust pipe and locking the rear wheel"
    ],
    correctAnswerIndex: 1,
    explanation: "Standing water can hide deep potholes or debris, cause tires to hydroplane (lose contact with the road), and temporarily wet your brakes, reducing their stopping efficacy."
  },
  {
    id: 111,
    question: "If you see a driver waiting to turn left at an upcoming intersection, a safe motorcycle rider should:",
    options: [
      "Assume they see you and maintain your exact speed and lane split",
      "Decelerate slightly, cover your brakes and clutch, choose a visible lane position, and prepare for evasive action",
      "Swerve side to side inside the lane to distract them",
      "Squeeze only the rear brake to slow to a crawl on the crosswalk"
    ],
    correctAnswerIndex: 1,
    explanation: "Assume oncoming left-turning vehicles do not see you. Covering your brakes and slowing down lowers your speed and prepares you for quick, safe defensive maneuvers."
  },
  {
    id: 112,
    question: "Under Minnesota law, motorcycles carrying passengers must be equipped with:",
    options: [
      "Dedicated passenger footpegs or rests, and a secure seat fit for two",
      "A protective roll bar surrounding the passenger's torso",
      "A secondary windshield and dual side exhaust pipes",
      "A backup mechanical brake lever for the passenger to use"
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law requires passenger-carrying motorcycles to have dedicated footrests or pegs for the passenger, and the passenger must keep their feet on those pegs while riding."
  },
  {
    id: 113,
    question: "If your motorcycle starts to experience a steering head wobble at high speeds, what is the best control step?",
    options: [
      "Slam on both brakes hard and push the handlebars aggressively sideways",
      "Grip the handlebars firmly, gradually ease off the throttle, do not apply brakes, and pull over safely",
      "Stand fully on the footpegs and wave your arms to alert other highway drivers",
      "Lean fully forward and try to hold the front wheel axle manually"
    ],
    correctAnswerIndex: 1,
    explanation: "Braking can worsen a steering wobble. Maintain a firm grip on the handlebars, gradually close the throttle to slow down safely, and coast out of the wobble to pull over."
  },
  {
    id: 114,
    question: "Under what conditions is a motorcyclist in Minnesota legally permitted to carry a passenger?",
    options: [
      "Only if they have a valid motorcycle instruction permit",
      "Only if the motorcycle is equipped with a passenger seat and pegs, and the operator holds a valid motorcycle license endorsement",
      "Only if both riders are under age 18 and riding on a state highway",
      "At any time, provided the passenger sits on the fuel tank"
    ],
    correctAnswerIndex: 1,
    explanation: "Riders on a motorcycle instruction permit are strictly prohibited from carrying passengers. You must possess a full Class M endorsement to carry a passenger legally."
  },
  {
    id: 115,
    question: "What percentage of physical stopping power does the rear brake generally provide under dry conditions?",
    options: [
      "About 70%",
      "About 30%",
      "About 90%",
      "About 5%"
    ],
    correctAnswerIndex: 1,
    explanation: "The front brake provides approximately 70% of a motorcycle's total stopping capability. The rear brake contributes the remaining 30% under dry conditions."
  },
  {
    id: 116,
    question: "How does carrying a heavy passenger affect your motorcycle's operational characteristics?",
    options: [
      "The bike accelerates faster due to increased rear axle weight friction",
      "The bike accelerates slower, handles heavier, and requires a significantly longer distance to brake and stop safely",
      "It makes U-turns and slow speed maneuvering much lighter",
      "It has zero effect on the distance required to halt"
    ],
    correctAnswerIndex: 1,
    explanation: "The added mass of a passenger increases momentum. This results in heavier handling, slower acceleration, and significantly elongated braking distances."
  },
  {
    id: 117,
    question: "Why must you perform a physical 'head check' over your shoulder before changing lanes?",
    options: [
      "To check if your passenger is matching your body angle",
      "To check if your turn signals are operating correctly",
      "To inspect your blind spots, which cannot be seen in the rearview mirrors",
      "To confirm your exhaust pipe is not emitting visible smoke"
    ],
    correctAnswerIndex: 2,
    explanation: "While rearview mirrors are highly useful, they have blind spots to the left and right. A quick shoulder check is the only way to verify that a vehicle is not riding alongside you."
  },
  {
    id: 118,
    question: "If you must ride over slippery pavement, such as wet sewer grates or oil slicks, you should:",
    options: [
      "Accelerate and lean the bike in the turn direction",
      "Keep the motorcycle upright, maintain steady throttle, and avoid sudden turning, braking, or accelerating",
      "Lock both brakes to slide straight across as fast as possible",
      "Stand on the footpegs and weave the bike side to side"
    ],
    correctAnswerIndex: 1,
    explanation: "On extremely slick surfaces, sudden changes in velocity or direction will trigger a slide. Gliding over the slick patch upright with a steady throttle is the safest approach."
  },
  {
    id: 119,
    question: "What is the proper way to wear a motorcycle helmet to ensure optimal safety?",
    options: [
      "Sitting loosely on the back of your head without snapping the chin strap",
      "Fitting snugly all around your head with the chin strap buckled securely",
      "Placed over a baseball cap or beanie matching your outfit",
      "Tilted forward so it covers your forehead and nose"
    ],
    correctAnswerIndex: 1,
    explanation: "An unbuckled or loose helmet can easily fly off your head during a slide or bounce, leaving you with zero protection. It must fit snugly and be buckled securely."
  },
  {
    id: 120,
    question: "If an oncoming car drifts across the yellow line directly into your lane of travel, what is your safest reaction?",
    options: [
      "Swerve left into their oncoming lane of travel to bypass them",
      "Flash your lights, honk your horn, and swerve to the right side of your lane or shoulder to exit their path",
      "Hold both brakes hard and stay center to brace for contact",
      "Quickly slide the motorcycle onto its side to slide"
    ],
    correctAnswerIndex: 1,
    explanation: "Avoid swerving left, as the oncoming car might correct suddenly. Swerving right toward the shoulder or side gives you an escape route with less danger of a head-on collision."
  },
  {
    id: 121,
    question: "When riding a motorcycle with a passenger, the passenger is legally required to:",
    options: [
      "Hold on to the driver's shoulders at all times",
      "Sit on the rear fender with their feet dangling close to the road",
      "Wear a DOT-approved helmet if they are under age 18, and keep their feet on passenger footpegs",
      "Lean in the opposite direction of the driver in all corners"
    ],
    correctAnswerIndex: 2,
    explanation: "Under Minnesota rules, passengers under 18 must wear helmet protection, and passengers of any age must use passenger footrests and keep feet on the pegs."
  },
  {
    id: 122,
    question: "If a tire suddenly leaks or experiences a flat during a ride, how can you identify which tire has the problem?",
    options: [
      "If the front goes flat, the steering will feel heavy; if the rear goes flat, the back of the bike will slide or sway side-to-side",
      "You cannot tell which tire is flat unless you stop and use an air pressure gauge",
      "If the front goes flat, the engine will start to backfire loudly",
      "If the rear goes flat, the front brake lever will feel soft and spongy"
    ],
    correctAnswerIndex: 0,
    explanation: "A front flat tire makes steering feel heavy and unresponsive. A rear flat tire causes the back of the motorcycle to fishtail, sway, or slide from side to side."
  },
  {
    id: 123,
    question: "Why should you never ride in the blind spot of a passenger vehicle or commercial truck?",
    options: [
      "The car's exhaust could damage your helmet face shield",
      "They may change lanes at any moment and collide with you because they do not see you",
      "Riding in blind spots causes your engine to consume more fuel",
      "It is a violation of local parkway speed ordinances"
    ],
    correctAnswerIndex: 1,
    explanation: "Blind spots are areas where drivers cannot see you in their mirrors. If you ride in a blind spot, the driver may change lanes into you without realizing you are there."
  },
  {
    id: 124,
    question: "What is the recommended proper hand grip position on the motorcycle handlebars?",
    options: [
      "Grip the handlebars loosely while keeping your wrists flat or slightly down, ready to react",
      "Grip the handlebars as tightly as possible to reduce engine vibration",
      "Hold the handlebars with your left hand only and rest your right hand on your thigh",
      "Keep your wrists raised high above the level of the grips"
    ],
    correctAnswerIndex: 0,
    explanation: "Hold the grips firmly but with relaxed wrists, keeping your wrists flat or slightly down. This prevents you from accidentally rolling open the throttle if you hit a bump."
  },
  {
    id: 125,
    question: "When riding over a bridge with steel open-mesh grates, what physical sensation should you expect?",
    options: [
      "The tires will lock up automatically and stop the motorcycle",
      "The motorcycle will feel shaky or wander slightly, but you should stay calm, maintain a steady speed, and ride straight across",
      "The bike will lean aggressively into the river wind pool",
      "You must stand up on the seat and ride on one wheel only"
    ],
    correctAnswerIndex: 1,
    explanation: "Steel mesh grates often cause tires to wander or wiggle slightly. This is normal behavior: do not fight the handlebar, keep a steady speed, and look straight ahead."
  },
  {
    id: 126,
    question: "Why is wearing heavy denim or sturdy leather jackets recommended for all motorcycle rides?",
    options: [
      "They protect you from rain and make you look like a professional racer",
      "They help keep your body temperature high enough to avoid sweating",
      "They offer crucial abrasion resistance to protect your skin during slides and guard against serious road rash",
      "They prevent your engine oil from splashing onto your clothes"
    ],
    correctAnswerIndex: 2,
    explanation: "Sturdy materials like leather or heavy motorcycle denim protect your skin from friction heat and road contact injuries if you slide during a fall."
  },
  {
    id: 127,
    question: "If you are riding in a group of several motorcycles, how should you pass a slower vehicle on a two-lane road?",
    options: [
      "The entire group should pass at the exact same time side-by-side",
      "Riders should pass one at a time, with each rider completing the pass safely before the next rider begins",
      "The leader should pass, and the rest should follow tailgating the passed car",
      "Passing is completely illegal when riding in a group formation"
    ],
    correctAnswerIndex: 1,
    explanation: "Group members must pass individually. Each rider must check traffic, signal, execute their pass, and return to their spot before the next rider initiates their pass."
  },
  {
    id: 128,
    question: "When slowing down or stopping, what can happen if you apply only the rear brake?",
    options: [
      "The front tire will fold sideways instantly",
      "You will stop in half the distance compared to using both brakes",
      "Your stopping distance will be much longer, and you risk locking the rear tire and skidding",
      "The engine will automatically switch into high reverse gear"
    ],
    correctAnswerIndex: 2,
    explanation: "Relying on the rear brake alone leaves 70% of your braking capacity unused. This greatly increases your stopping distance and makes a rear-wheel slide much more likely."
  },
  {
    id: 129,
    question: "If a large insect hits your face shield or goggles while riding, what is the safest reaction?",
    options: [
      "Swerve aggressively to use the wind to blow the bug away",
      "Keep a steady speed, keep your eyes on the road, open your visor slightly if needed, and pull over when safe to wipe it clean",
      "Take your hands off the handlebars immediately to scrape the bug off",
      "Squeeze both brakes hard to halt in the middle of your lane"
    ],
    correctAnswerIndex: 1,
    explanation: "Do not let yourself be distracted. Maintain steering control, stay straight, and pull over safely to a stop on the shoulder to clean your visor."
  },
  {
    id: 130,
    question: "If you are riding and notice oil or coolant leaking onto your rear tire, you should:",
    options: [
      "Lean deeper in curves to scrub the oil off the tire treads",
      "Accelerate to let wind friction dry the tire surfaces",
      "Avoid leaning, reduce your speed gradually, and pull over to check for the leak source",
      "Apply the rear brake with maximum force to lock the tire and wipe it off"
    ],
    correctAnswerIndex: 2,
    explanation: "Oil or coolant on tire rubber destroys tires' traction. Avoid leans, slow down gradually without hard braking, and pull off the roadway to isolate the problem."
  },
  {
    id: 131,
    question: "In Minnesota, if a rider under the age of 18 is caught operating a motorcycle without a DOT-compliant helmet, what are the legal ramifications?",
    options: [
      "They may be cited for an equipment violation and have their operating privileges suspended or permit invalid status issued",
      "They are only issued an oral warning on the first three offences",
      "They must pay a nominal $5 administrative fee with no license impact",
      "Their engine will be seized and impounded permanently by the state patrol"
    ],
    correctAnswerIndex: 0,
    explanation: "Operating a motorcycle in Minnesota under 18 without a legal helmet is a traffic safety violation that leads to citations, fines, and potential permit suspension."
  },
  {
    id: 132,
    question: "What is the maximum legal speed limit for an operator riding with a Minnesota motorcycle instruction permit?",
    options: [
      "Permit holders are restricted to a maximum speed of 45 mph at all times",
      "There is no special numerical speed limit; permit holders must follow all posted speed limits",
      "They are only allowed to ride on streets posted at 30 mph or less",
      "They must ride at least 15 mph under the posted speed limit to ensure safety"
    ],
    correctAnswerIndex: 1,
    explanation: "While motorcycle permit holders have restrictions such as no night riding and no passengers, they must follow standard posted speed limits."
  },
  {
    id: 133,
    question: "Under Minnesota law, at what Blood Alcohol Concentration (BAC) is it illegal for a person over 21 to operate any motor vehicle?",
    options: [
      "0.02 percent or higher",
      "0.05 percent or higher",
      "0.08 percent or higher",
      "0.10 percent or higher"
    ],
    correctAnswerIndex: 2,
    explanation: "In Minnesota, a BAC of 0.08% or higher is the legal threshold for Driving While Impaired (DWI) for drivers holding a standard license."
  },
  {
    id: 134,
    question: "How does hypothermia or extreme cold exposure physically limit your motorcycle riding capabilities?",
    options: [
      "It makes your vision clearer by shrinking the pupils",
      "It causes numbness, slows muscle reflexes, impairs physical coordination, and delays critical decision-making",
      "It causes your motorcycle suspension to stiffen in curves",
      "It has no impact if you have a passenger to buffer the wind"
    ],
    correctAnswerIndex: 1,
    explanation: "Cold wind and chilling temperatures drain body heat. Resulting hypothermia impairs fine motor tasks, delays reactions, and leads to fatal riding errors."
  },
  {
    id: 135,
    question: "What is the safest way to cross railroad tracks that run parallel to your lane of travel?",
    options: [
      "Ride across them at a sharp angle of at least 45 degrees, preferably closer to 90 degrees",
      "Swerve back and forth continuously until you slip past them",
      "Ride directly on top of the steel track to gain traction",
      "Accelerate to your maximum speed to jump the track gaps"
    ],
    correctAnswerIndex: 0,
    explanation: "Parallel tracks can catch your tires and trigger a crash. Move far enough away from the tracks to cross them at an angle of 45 to 90 degrees to cross safely."
  },
  {
    id: 136,
    question: "If your motorcycle's throttle sticks open while riding, what is your safest immediate reaction?",
    options: [
      "Squeeze the clutch lever to disengage the engine from the rear wheel, hit the engine cutoff switch, and apply the brakes",
      "Turn off the ignition key immediately to lock the steering column",
      "Downshift as fast as possible without disengaging the clutch",
      "Slam on the front brake to force the engine to stall"
    ],
    correctAnswerIndex: 0,
    explanation: "Squeezing the clutch prevents the engine from propelling you forward. Running the cutoff switch powers down the engine so you can brake to a safe stop."
  },
  {
    id: 137,
    question: "When riding a motorcycle through a curve, what is the safest adjustment if you encounter wet autumn leaves?",
    options: [
      "Apply the front brake with maximum pressure to clean the tires",
      "Increase speed to pass through the leaves as fast as possible",
      "Reduce your lean angle, keep the bike as upright as possible, and maintain a steady, smooth throttle input",
      "Lean significantly deeper to cut through the leaf layer to the pavement"
    ],
    correctAnswerIndex: 2,
    explanation: "Wet leaves are as slippery as ice. Keeping the motorcycle relatively upright and avoiding sharp throttle or braking shifts prevents sliding out."
  },
  {
    id: 138,
    question: "Under Minnesota regulations, what are the requirements for carrying cargo or packages on a motorcycle?",
    options: [
      "Cargo must not be carried unless you are riding on designated county truck roads",
      "Cargo must be secured properly and must not prevent the operator from keeping both hands on the handlebars",
      "Cargo is limited to a maximum weight of 10 pounds including the rack",
      "You must secure all cargo with rigid steel chains rather than bungee straps"
    ],
    correctAnswerIndex: 1,
    explanation: "Cargo must be stored or strapped so it doesn't shift, unbalance the bike, or interfere with control levers, and the rider must keep both hands free to steer."
  },
  {
    id: 139,
    question: "How can you check if your motorcycle's tires have adequate tread depth for safe riding?",
    options: [
      "If the tire looks shiny, the tread is in ideal condition",
      "Check the tread wear indicators built into the tire grooves, or ensure tread is at least 2/32 inch (or 1/32 inch in some states)",
      "Verify that the tires expand by 5 inches when fully inflated",
      "Look for bald spots, which provide better dry drag-strip traction"
    ],
    correctAnswerIndex: 1,
    explanation: "Tire tread wear bars or indicators flush with the tire tread surface signify that the tire is worn out and must be replaced immediately to protect against hydroplaning."
  },
  {
    id: 140,
    question: "If a dog or other small animal chases your motorcycle while riding, what is the recommended defense strategy?",
    options: [
      "Kick at the animal to drive it away from the motorcycle wheels",
      "Accelerate instantly toward the animal to scare it into stopping",
      "Slow down gradually as you approach, then accelerate crisply past the animal to throw off its intercept timing",
      "Swerve into the opposing lane to completely bypass the animal"
    ],
    correctAnswerIndex: 2,
    explanation: "Animals guess your speed to intercept you. Slowing down as you approach alters their angle, and accelerating past leaves them behind safely."
  },
  {
    id: 141,
    question: "A multi-lane highway has a center lane marked with two solid yellow lines on both sides. When can you ride in this center lane?",
    options: [
      "Only when overtaking three or more vehicles on the right",
      "Never; standard vehicles and motorcycles are prohibited from driving or riding in this lane",
      "Whenever traffic is moving slower than 20 mph in the main travel lanes",
      "To park your motorcycle temporarily to make a phone call"
    ],
    correctAnswerIndex: 1,
    explanation: "Double solid yellow lines signify a strictly prohibited area. Driving or riding in this center lane is illegal and highly dangerous."
  },
  {
    id: 142,
    question: "On a scorching summer day, what hazard does fresh asphalt pose to a parked motorcycle?",
    options: [
      "The asphalt chemicals can corrode aluminum rims",
      "The side stand can sink into the softened asphalt, causing the motorcycle to tip over",
      "The tires will melt and weld permanently to the road surface",
      "Engine oil will boil if parked on hot asphalt"
    ],
    correctAnswerIndex: 1,
    explanation: "Hot asphalt softens and loses structural integrity. Parked motorcycles can sink and tip. Placing a small metal plate or plastic coaster under the side stand spreads the weight to prevent sinking."
  },
  {
    id: 143,
    question: "Which of the following offers the highest safety visibility advantage for a motorcyclist?",
    options: [
      "An all-black leather suit with silver metal studs",
      "A bright orange, neon yellow, or lime green jacket paired with a light-colored helmet",
      "Dark denim jeans with dark boots",
      "A dark blue windbreaker with standard reflective piping"
    ],
    correctAnswerIndex: 1,
    explanation: "Fluorescent and high-contrast neon colors (especially orange, yellow, and green) stand out dramatically in daylight and low-light environments, making you much easier to spot."
  },
  {
    id: 144,
    question: "Why should you use standard hand signals in addition to your motorcycle's electrical turn signals?",
    options: [
      "To save wear and tear on your motorcycle's turn signal bulbs",
      "To satisfy a mandatory Minnesota dual-signaling permit requirement",
      "In situations with bright direct sunlight where your flashing amber signals might be difficult for other drivers to see",
      "Only when you are carrying a passenger who is unable to see the indicators"
    ],
    correctAnswerIndex: 2,
    explanation: "Bright sunlight can wash out motorcycle turn signals. Using manual hand signals provides extra visibility to ensure drivers notice your intent."
  },
  {
    id: 145,
    question: "Which side of a large commercial truck or semi-trailer holds the largest and most dangerous blind spot?",
    options: [
      "The immediate right side of the truck, extending backward",
      "The immediate left side of the truck, right next to the driver door",
      "The front area within 5 feet of the truck grill",
      "There are no blind spots on commercial vehicle mirrors"
    ],
    correctAnswerIndex: 0,
    explanation: "While trucks have blind spots on all sides, the right side has the largest and most dangerous blind spot, extending across multiple lanes. Avoid riding in this zone."
  },
  {
    id: 146,
    question: "Why do safety helmet manufacturers recommend replacing a motorcycle helmet every 3 to 5 years?",
    options: [
      "To update the helmet style to match newer motorcycle graphics",
      "Because the protective inner EPS foam lining degrades, hardens, and loses its shock-absorbing capability over time",
      "State laws require you to retake your licensing test if your helmet is older than 3 years",
      "Newer helmets are made of waterproof alloys that do not exist in older linings"
    ],
    correctAnswerIndex: 1,
    explanation: "Helmets degrade over time from sweat, hair oils, UV exposure, and heat. The protective polystyrene foam liner compresses and hardens, failing to absorb impacts effectively."
  },
  {
    id: 147,
    question: "What is the proper hand signal to indicate that you are stopping or slowing down?",
    options: [
      "Left arm extended straight out horizontally",
      "Left arm out, bent upward at a 90-degree angle",
      "Left arm extended downward with the palm facing backward or toward the rear",
      "Waving both arms up and down repeatedly"
    ],
    correctAnswerIndex: 2,
    explanation: "Extend your left arm downward with your palm facing to the rear to signal to drivers behind that you are slowing or stopping."
  },
  {
    id: 148,
    question: "What is the proper hand signal to indicate a left turn?",
    options: [
      "Left arm extended straight out horizontally",
      "Left arm bent upward at a 90-degree angle",
      "Right arm extended straight up into the air",
      "Left index finger pointing to the motorcycle gas tank"
    ],
    correctAnswerIndex: 0,
    explanation: "Extending your left arm straight out horizontally is the universal hand signal for a left turn."
  },
  {
    id: 149,
    question: "What is the proper hand signal to indicate a right-hand turn?",
    options: [
      "Left arm extended straight out horizontally",
      "Left arm out, bent upward at a 90-degree angle with palm flat",
      "Right arm bent downward at a 90-degree angle",
      "Pointing your left foot out to the side"
    ],
    correctAnswerIndex: 1,
    explanation: "Extending your left arm out and bending it upward at a 90-degree angle signals a right turn."
  },
  {
    id: 150,
    question: "When riding a motorcycle in heavy crosswinds on an open highway, you should:",
    options: [
      "Shift into neutral and let the wind steer you safely",
      "Lean slightly into the wind to maintain your path, and avoid riding right next to large trucks that block the wind",
      "Grip the handlebars loosely with one hand and lean backward",
      "Accelerate to 85 mph to cut through the crosswind currents faster"
    ],
    correctAnswerIndex: 1,
    explanation: "Leaning slightly into the wind counters the lateral force. Watch out when passing large trucks: they block the wind temporarily, but you will experience a sudden gust when you clear them."
  },
  {
    id: 151,
    question: "How does the technique of counterweighting differ from countersteering?",
    options: [
      "It is only used when parking the bike on soft surfaces",
      "At slow speeds (under 15 mph), you lean your body in the opposite direction of the turn to balance the motorcycle's weight",
      "You pull the clutch lever completely while keeping the throttle wide open",
      "It is used exclusively above 60 mph on wet curves"
    ],
    correctAnswerIndex: 1,
    explanation: "At slow speeds, you balance the bike during tight turns by leaning your body outward (counterweighting) while leaning the motorcycle inward."
  },
  {
    id: 152,
    question: "If you are caught riding in a sudden, severe storm with poor visibility and heavy rain, what is your safest option?",
    options: [
      "Speed up to reach your destination before the roads pool",
      "Ride close to the bumper of a passenger car to follow their tracks",
      "Pull off the road entirely at an exit or safe location, and wait out the storm in a dry, protected spot",
      "Lay your motorcycle down on the grassy shoulder and wait"
    ],
    correctAnswerIndex: 2,
    explanation: "Severe storms present high risks of hydroplaning, blinding wind, and failing traction. Pulling over to wait it out is the safest approach."
  },
  {
    id: 153,
    question: "When braking on a steep downhill descent, how does the motorcycle's weight shift impact brake effectiveness?",
    options: [
      "The rear brake becomes twice as effective due to gravity",
      "Weight transfers heavily to the front wheel, making the front brake even more critical while the rear tire is more prone to locking and skidding",
      "Weight transfers upward, lifting both tires off the surface",
      "It makes both brakes behave identically with no weight shift"
    ],
    correctAnswerIndex: 1,
    explanation: "Descending shifts weight forward. This increases front wheel traction but makes the rear wheel light and very easy to lock up. Apply the rear brake smoothly and use the front brake progressively."
  },
  {
    id: 154,
    question: "When parking your motorcycle on a steep incline or hill, what is the best parking procedure?",
    options: [
      "Leave the motorcycle in neutral and rely on the steering lock",
      "Angle the motorcycle with the rear tire touching the curb, and leave the transmission in first gear",
      "Park parallel to the curb with the kickstand on the downhill side",
      "Park with the front tire touching the curb and leave the bike in neutral"
    ],
    correctAnswerIndex: 1,
    explanation: "Parking with the rear wheel touching the curb prevents the bike from sliding. Leaving the transmission in first gear acts as a brake to keep the motorcycle from rolling."
  },
  {
    id: 155,
    question: "Under standard parallel parking rules, how close must your motorcycle be to the curb?",
    options: [
      "Within 3 feet of the curb line",
      "Within 12 inches (or state-specified close distance) of the curb line",
      "At least 5 feet away from the curb to allow bicycle traffic",
      "Directly on top of the curb on the grassy shoulder"
    ],
    correctAnswerIndex: 1,
    explanation: "Parallel parked motorcycles must comply with standard parking rules, typically parked within 12 inches of the curb line."
  },
  {
    id: 156,
    question: "What is meant by 'over-riding' your motorcycle's headlight at night?",
    options: [
      "Toggling your high beams on and off rapidly to confuse oncoming motorists",
      "Riding at a speed where your total stopping distance is greater than the distance illuminated by your headlight",
      "Using custom LED bulbs that drain the battery on dark roads",
      "Covering your headlight lens with a protective dark film"
    ],
    correctAnswerIndex: 1,
    explanation: "At night, if you ride too fast, you can't stop within the area illuminated by your headlight. If a hazard appears, you will hit it before you can stop."
  },
  {
    id: 157,
    question: "Under Minnesota law, what features must a motorcycle safety helmet possess to be considered DOT compliant?",
    options: [
      "A rigid outer shell, shock-absorbing EPS lining, a secured chin strap, and a official 'DOT' label on the back",
      "A dark tinted visor and integrated Bluetooth speakers",
      "A carbon-fiber pattern decal and a leather neck curtain",
      "It must be yellow/orange and weigh less than 1 pound"
    ],
    correctAnswerIndex: 0,
    explanation: "DOT-compliant helmets require a high-density polystyrene liner, a sturdy chin strap, and a official 'DOT' certification stamp on the rear shell."
  },
  {
    id: 158,
    question: "What is the primary danger associated with 'target fixation' during motorcycle operation?",
    options: [
      "It causes your dashboard indicators to burn out quickly",
      "You will steer directly toward the hazard you are staring at instead of looking at your escape path",
      "It makes your helmet visor fog up from your breathing",
      "It causes the engine to experience a temporary fuel lines block"
    ],
    correctAnswerIndex: 1,
    explanation: "Motorcycles go where you look. Staring at an obstacle (pothole, car) makes you steer directly into it. Always look toward your escape path instead."
  },
  {
    id: 159,
    question: "When stopped at a red light behind a passenger car in traffic, where should you position your motorcycle?",
    options: [
      "Directly in the center of the lane, close to their rear bumper",
      "Off to one side of the lane (left or right portion) with the bike in first gear, monitoring your mirrors for rear-end hazards",
      "On the sidewalk next to the crosswalk",
      "Right underneath the vehicle's exhaust pipe"
    ],
    correctAnswerIndex: 1,
    explanation: "Positioning to the side gives you an escape route if a vehicle fails to stop behind you. Keeping the bike in first gear allows you to move out of danger quickly if a car approaches too fast from behind."
  },
  {
    id: 160,
    question: "When checking your motorcycle's drive chain, what is generally a standard safe slack measurement?",
    options: [
      "Between 3 and 4 inches of play",
      "No slack at all; the chain must be tight with zero movement",
      "Typically about 3/4 inch to 1 and 1/4 inches of play, depending on manufacturer specifications",
      "At least 6 inches of play to ensure smooth shifts"
    ],
    correctAnswerIndex: 2,
    explanation: "Most motorcycle chains require roughly 3/4 to 1.25 inches (20-30 mm) of slack to allow the suspension to move up and down without snapping the chain."
  },
  {
    id: 161,
    question: "How should you check the engine oil level on most modern motorcycles?",
    options: [
      "With the engine running at high speed on the side stand",
      "With the motorcycle held upright on a level surface, using either the sight glass or the dipstick as specified",
      "By removing the oil filter and checking for solid deposits",
      "By measuring how much oil leaks onto the floor overnight"
    ],
    correctAnswerIndex: 1,
    explanation: "Check the oil with the bike upright, not resting on the side stand, to ensure an accurate reading through the sight glass or on the dipstick."
  },
  {
    id: 162,
    question: "Under Minnesota law, are you permitted to attach a passenger sidecar to any motorcycle?",
    options: [
      "No, sidecars are completely prohibited on all public roadways",
      "Yes, provided the sidecar is securely bolted and does not block path visibility, and the motorcycle is registered",
      "Only if you operate a automatic moped with a 50cc engine",
      "Only on unpaved gravel paths"
    ],
    correctAnswerIndex: 1,
    explanation: "Sidecars are legal in Minnesota if they are registered and mounted securely according to manufacturer and law guidelines."
  },
  {
    id: 163,
    question: "What can cause the rear wheel of a motorcycle to hop or chatter when shifting gears?",
    options: [
      "Failing to pump the front brake lever before shifting",
      "Releasing the clutch too rapidly after downshifting without matching engine speed (rev-matching)",
      "Riding on extremely hot asphalt pavement",
      "Using low-octane unleaded fuel"
    ],
    correctAnswerIndex: 1,
    explanation: "Releasing the clutch too quickly after downshifting makes the rear wheel drag and chatter as it tries to match engine speed. Smooth clutch control or rev-matching prevents this."
  },
  {
    id: 164,
    question: "When riding along a row of parked cars on a city street, what is the best lane position?",
    options: [
      "The right portion of the lane, close to their doors",
      "The center or left portion of the lane, to stay clear of opening doors, pulling-out cars, and emerging pedestrians",
      "Weaving between the parked cars to stay out of traffic",
      "Riding directly on the sidewalk"
    ],
    correctAnswerIndex: 1,
    explanation: "Riding in the center or left portion of your lane keeps you clear of opening car doors ('dooring') and motorists pulling out without looking."
  },
  {
    id: 165,
    question: "What does a flashing yellow arrow traffic signal indicate to a motorcyclist?",
    options: [
      "An immediate and mandatory emergency complete stop",
      "You may turn left cautiously, but you must yield to oncoming traffic and pedestrians first",
      "The signal is broken and you must proceed at 45 mph",
      "You have the right-of-way and all oncoming vehicles must stop"
    ],
    correctAnswerIndex: 1,
    explanation: "A flashing yellow arrow means left turns are allowed but unprotected. You must yield to oncoming traffic and pedestrians before turning."
  },
  {
    id: 166,
    question: "When behind a truck carrying gravel or unsealed cargo, what is the safest strategy?",
    options: [
      "Follow closely to block the wind from hitting your chest",
      "Increase your following distance to stay out of the path of falling rocks, or pass the vehicle safely when legal",
      "Ride in the center of the lane to absorb any stones with your engine guard",
      "Honk your horn repeatedly until the truck driver pulls over"
    ],
    correctAnswerIndex: 1,
    explanation: "Insecure truck loads can drop rocks, gravel, or debris. Increasing your following distance prevents cracked face shields, dented headlights, and traction slides."
  },
  {
    id: 167,
    question: "If you are pulled over by law enforcement in Minnesota, what documents must you legally present?",
    options: [
      "Your valid driver's license with Class M endorsement or permit, vehicle registration, and proof of valid motorcycle insurance",
      "Just your driver's license with no extra paperwork",
      "Your high school diploma and a valid safety certificate",
      "A written reference from a licensed motorcycle mechanic"
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law requires operators to carry their license or permit, proof of insurance, and registration to show to law enforcement upon request."
  },
  {
    id: 168,
    question: "On average, how long does it take for a healthy adult body to process and eliminate one standard alcoholic drink?",
    options: [
      "About 15 minutes",
      "About one hour",
      "About three hours",
      "About six hours"
    ],
    correctAnswerIndex: 1,
    explanation: "The human liver filters alcohol at a steady rate of about one standard drink per hour. Coffee, cold showers, or exercise do not speed up this process."
  },
  {
    id: 169,
    question: "In Minnesota, when can a motorcyclist proceed through a red light that fails to detect the motorcycle?",
    options: [
      "Immediately, if there are no other cars at the intersection",
      "Only after coming to a complete stop, waiting an unreasonable amount of time, and verifying that no cross-traffic or pedestrians are approaching",
      "Whenever cross-traffic has a yellow light",
      "Never; motorcyclists must wait for a passenger car to trigger the signal"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota's 'Affirmative Defense' rule allows motorcycles and bicycles to proceed cautiously through a red light if it fails to detect them, after a complete stop and verifying cross-traffic is clear."
  },
  {
    id: 170,
    question: "What is the significance of the clutch 'friction zone' when launching a motorcycle on a steep uphill grade?",
    options: [
      "It locks the front wheel to prevent rolling backward",
      "It is the point where the clutch starts transferring power to the rear wheel, allowing you to hold position and launch smoothly without rolling back",
      "It is a dangerous wear-point that should be avoided on hills",
      "It automatically shifts the transmission into neutral"
    ],
    correctAnswerIndex: 1,
    explanation: "Slightly slipping the clutch within its friction zone allows you to apply power to hold the bike's position and accelerate smoothly on a hill while releasing the brakes."
  },
  {
    id: 171,
    question: "Squeezing the front brake lever too aggressively while the front wheel is turned can result in:",
    options: [
      "An immediate clean stop with zero slide risk",
      "A front-wheel lockup or slide, causing the motorcycle to fall instantly (low-side crash)",
      "The rear tire lifting 5 feet off the pavement",
      "High-speed engine backfiring"
    ],
    correctAnswerIndex: 1,
    explanation: "Braking when the front wheel is turned reduces cornering traction. Hard inputs can easily lock the front tire, washing it out and causing a crash."
  },
  {
    id: 172,
    question: "When passing an oncoming semi-truck or large commercial vehicle on a two-lane road, what should you expect?",
    options: [
      "The truck will automatically pull over onto the shoulder to let you pass",
      "A gust of wind or air blast that can push you outward; you should maintain your path with a firm grip",
      "An increase in tire traction from exhaust heat",
      "A sudden loss of all headlight illumination"
    ],
    correctAnswerIndex: 1,
    explanation: "Large oncoming vehicles push a large wave of air. Be prepared for a wind blast that can push you toward the shoulder as the truck passes."
  },
  {
    id: 173,
    question: "If you cannot avoid riding over an obstacle, such as a 3-inch wooden log on the highway, what is the best technique?",
    options: [
      "Lean forward, slam on the front brake, and swerve as you hit it",
      "Keep the bike straight, stand slightly on the footpegs, accelerate slightly right before contact to lift the front, and ease off throttle over the obstacle",
      "Lock both brakes to slide sideways over the log",
      "Turn the handlebars back and forth quickly to bounce over"
    ],
    correctAnswerIndex: 1,
    explanation: "Standing on the pegs lets your legs act as shock absorbers. Keeping the bike straight and releasing the brakes before impact helps the suspension absorb the bump safely."
  },
  {
    id: 174,
    question: "What is the proper, standard sequence for upshifting gears on a manual motorcycle?",
    options: [
      "Close throttle, squeeze clutch lever, click the shift lever up, ease clutch out while opening throttle",
      "Hold throttle wide open, tap the shift lever down twice, and stomp on the rear brake",
      "Squeeze front brake, click shift lever down, and pop the clutch out instantly",
      "Turn off the engine cutoff switch, click up, and restart the motor"
    ],
    correctAnswerIndex: 0,
    explanation: "Standard upshifting requires closing the throttle, pulling the clutch, clicking up the shift lever, and smoothly engaging the clutch while rolling on the throttle."
  },
  {
    id: 175,
    question: "Why should you check your rearview mirrors during deceleration or when preparing to stop?",
    options: [
      "To check if your turn signals are flashing correctly",
      "To ensure your passenger is sitting upright",
      "To monitor vehicles behind you and ensure they are slowing down, avoiding rear-end collisions",
      "To check if any road debris has stuck to your rear license plate"
    ],
    correctAnswerIndex: 2,
    explanation: "Many motorcycle crashes involve being rear-ended at stops. Monitoring your mirrors lets you spot distracted drivers approaching too fast so you can escape."
  },
  {
    id: 176,
    question: "What is the safest way to secure your helmet chin strap?",
    options: [
      "Fastened loosely so you can slip a hand underneath",
      "Tucked inside your collar without buckling to ensure rapid removal",
      "Threaded through the double-D rings or buckle mechanism snugly, with room for only one finger underneath",
      "Wrapped around the helmet shell itself"
    ],
    correctAnswerIndex: 2,
    explanation: "The chin strap must be adjusted snugly. If it is loose or unbuckled, the helmet will fly off during a crash, leaving you unprotected."
  },
  {
    id: 177,
    question: "What does a steady 'red X' indicator displayed above a highway lane mean?",
    options: [
      "The lane is designated for high-speed motorcycle racing",
      "The lane is closed to all traffic; you must move out of it safely",
      "Emergency service vehicles only are permitted to park there",
      "The lane contains a toll collection booth ahead"
    ],
    correctAnswerIndex: 1,
    explanation: "A steady red X overhead indicator means the lane is closed. You must move out of it as soon as possible."
  },
  {
    id: 178,
    question: "How do worn-out shock absorbers affect your motorcycle's braking performance?",
    options: [
      "They help the tires stay warmer and provide more traction",
      "They can cause the tires to bounce and lose contact with the road, significantly increasing your stopping distance",
      "They have zero effect on braking or traction",
      "They automatically disable front and rear wheel ABS"
    ],
    correctAnswerIndex: 1,
    explanation: "Worn shocks fail to keep the tires pressed firmly against the pavement. This leads to wheel bounce, traction loss, and much longer stopping distances."
  },
  {
    id: 179,
    question: "If a tire blows out or goes flat at high speed, how should you use your brakes?",
    options: [
      "Slam on both brakes with maximum force immediately",
      "Avoid using the brakes unless absolutely necessary; if needed, apply the brake on the non-flat tire gently",
      "Lock up the flat tire's wheel to slide straight across",
      "Use the front brake only, pressing as hard as possible"
    ],
    correctAnswerIndex: 1,
    explanation: "Braking on a flat tire can squeeze the tire off the rim, causing a total loss of control. Slow down using engine braking and steer straight, using gentle braking only on the good tire if necessary."
  },
  {
    id: 180,
    question: "Running wide on a sharp highway curve is usually caused by:",
    options: [
      "Using premium synthetic motor oil",
      "Entering the turn too fast for conditions, or looking at the shoulder (target fixating) instead of through the curve",
      "Having too much tread depth on both tires",
      "Riding with your headlight high beam activated"
    ],
    correctAnswerIndex: 1,
    explanation: "Entering a curve too fast is the most common cause of running wide. Looking at the shoulder or guardrail (target fixation) instead of through the curve also contributes to this error."
  },
  {
    id: 181,
    question: "Under Minnesota law, how do standard prescription glasses compare to legal eye protection?",
    options: [
      "They satisfy all requirements if they are sunglasses",
      "They are not legal eye protection unless they have shatter-resistant lenses, or you wear a compliant helmet shield over them",
      "They are never allowed under any riding conditions",
      "They are only legal if they are tinted bright orange"
    ],
    correctAnswerIndex: 1,
    explanation: "Standard glasses can shatter from flying debris. Legal eye protection must meet safety standards (like ANSI Z87.1) for shatter-resistance."
  },
  {
    id: 182,
    question: "How does rain affect the visibility of asphalt road paint markings (lanes, crosswalks, arrows)?",
    options: [
      "Rain makes paint markings twice as visible and sticky",
      "Paint markings become extremely slippery when wet, and can hide beneath reflective puddles",
      "Rain has no impact on paint surfaces",
      "Rain causes paint markings to glow brightly in the dark"
    ],
    correctAnswerIndex: 1,
    explanation: "Asphalt paint lacks texture to drain water. When wet, painted lines become as slick as ice. Avoid braking or turning hard on painted markings during rain."
  },
  {
    id: 183,
    question: "Why should motorcyclists exercise extreme caution when stopping at toll booths or intersection centers?",
    options: [
      "The asphalt contains heat sensors that can burn tires",
      "Oil and fluid drippings from other vehicles build up in the center of the lane, making it extremely slick when wet",
      "The concrete releases magnetic waves that interfere with engine electronics",
      "Toll booths require you to slide the motorcycle to a halt"
    ],
    correctAnswerIndex: 1,
    explanation: "At stop points, stationary vehicles drop oil, grease, and coolant. These fluids collect in the center of the lane, making it a slick hazard, especially during rain."
  },
  {
    id: 184,
    question: "Under Minnesota law, what are the conditions for a motorcyclist to legally lane split or filter through traffic?",
    options: [
      "It is strictly illegal under all circumstances in Minnesota",
      "Only when traffic is moving at 25 mph or less, and the rider does not exceed traffic speed by more than 15 mph",
      "Only on multi-lane freeways during morning rush hours, up to 45 mph",
      "It is legal at any speed as long as the rider stays strictly on the dashed lane line"
    ],
    correctAnswerIndex: 1,
    explanation: "As of July 1, 2025, Minnesota law permits lane splitting when traffic is moving at 25 mph or less, provided the rider does not exceed 15 mph over the speed of traffic. Lane filtering is also permitted through completely stopped traffic at a maximum of 15 mph. Both are prohibited in roundabouts, school zones, freeway on-ramps, and single-lane work zones."
  },
  {
    id: 185,
    question: "Under Minnesota's typical automotive insurance policies, does 'no-fault' personal injury protection automatically cover motorcycle injuries?",
    options: [
      "Yes, it covers motorcycles identically to standard four-wheeled passenger cars",
      "No, motorcycle insurance is excluded from standard 'no-fault' policies, and requires dedicated motorcycle-specific coverage",
      "Only if you are carrying a licensed passenger under 18",
      "Only on state parkways on weekends"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota's No-Fault Auto Insurance Act excludes motorcycles. You must purchase dedicated motorcycle insurance to secure valid medical and liability coverage."
  },
  {
    id: 186,
    question: "What is the primary benefit of wearing hearing protection (earplugs) on high-speed highway rides?",
    options: [
      "It helps you tune into local radio frequencies",
      "It protects your hearing from permanent wind noise damage, reducing fatigue, while still allowing you to hear traffic sounds",
      "It completely blocks out emergency siren sounds to keep you calm",
      "It makes the motorcycle engine run quieter"
    ],
    correctAnswerIndex: 1,
    explanation: "Wind noise at highway speeds exceeds safe decibel limits and can cause permanent hearing damage. Earplugs reduce wind drone while keeping sirens and horns audible."
  },
  {
    id: 187,
    question: "What is the safest way to alert drivers of your location in foggy or low-visibility weather?",
    options: [
      "Ride with your high beam activated and keep your hazard blinkers on if equipped, maintaining a safe following distance",
      "Turn off your lights to prevent blinding other drivers",
      "Swerve back and forth continuously while sounding your horn",
      "Ride close to the bumper of a large semi-truck"
    ],
    correctAnswerIndex: 0,
    explanation: "Low beam or high beam headlights along with hazard flashes make you much more visible in fog. Avoid tailgating and expand your space cushion."
  },
  {
    id: 188,
    question: "What is the minimum age required to carry a passenger on a motorcycle in Minnesota?",
    options: [
      "There is no age restriction for the operator, provided they hold a valid Class M license endorsement",
      "The operator must be at least 18 years old",
      "The operator must be at least 21 years old",
      "Passengers are only allowed if the driver is over 65"
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law does not set a minimum age for the driver to carry passengers, but the driver must hold a full motorcycle endorsement (not a permit)."
  },
  {
    id: 189,
    question: "If your throttle is stuck open and your clutch cable snaps simultaneously, how should you shut down engine power?",
    options: [
      "Coast to a stop and wait for the gas tank to run dry",
      "Use the engine cutoff switch to power down the engine, and brake to a stop",
      "Shift into a higher gear with maximum throttle",
      "Slide the motorcycle onto its side on the pavement"
    ],
    correctAnswerIndex: 1,
    explanation: "The engine cutoff switch shuts off ignition power immediately. This lets you slow down and stop safely, even if the clutch line fails."
  },
  {
    id: 190,
    question: "What is the primary danger of riding a motorcycle when fatigued or sleep-deprived?",
    options: [
      "It causes your tires to wear out faster",
      "It slows reaction times, dulls sensory perception, compromises balance, and can cause micro-sleep episodes",
      "It causes the engine oil pressure to drop",
      "It is only dangerous if you are carrying cargo"
    ],
    correctAnswerIndex: 1,
    explanation: "Fatigue impairs judgment, coordination, and reaction time. Do not ride if you are exhausted: take frequent rests, or stay overnight."
  },
  {
    id: 191,
    question: "What safety gear protects your face and eyes from flying gravel, stones, and heavy insects?",
    options: [
      "A standard pair of designer plastic sunglasses",
      "A helmet face shield or shatter-resistant safety goggles",
      "A cloth bandana wrapped around your forehead",
      "Leaning forward close to the fuel tank"
    ],
    correctAnswerIndex: 1,
    explanation: "Shatter-resistant face shields or goggles protect your eyes from debris, bugs, and stones that can cause eye injury or distract you at speed."
  },
  {
    id: 192,
    question: "What features should a safe, protective pair of motorcycle riding boots have?",
    options: [
      "Thin rubber soles with high slip resistance and no laces",
      "Sturdy material (like leather), over-the-ankle height, slip-resistant soles, and tucked-in secure laces",
      "Canvas uppers with high-heeled platforms",
      "Open-toed sandals built with steel mesh inserts"
    ],
    correctAnswerIndex: 1,
    explanation: "Over-the-ankle boots protect ankles from heat and impacts. Slip-resistant soles keep your feet planted at stops, and tucked laces prevent catching on levers."
  },
  {
    id: 193,
    question: "What does the safety inspection acronym 'T-CLOCS' stand for?",
    options: [
      "Time, Clutch, Lights, Oil, Chain, Side stand",
      "Tires and Wheels, Controls, Lights and Electrics, Oil and Fluids, Chassis, Stands",
      "Throttle, Cables, Lever, Odometer, Cylinder, Spark",
      "Turn Signal, Carburetor, Linkage, Off-switch, Coolant, Suspension"
    ],
    correctAnswerIndex: 1,
    explanation: "T-CLOCS is the MSF's pre-ride inspection checklist: Tires/Wheels, Controls, Lights/Electrics, Oils/Fluids, Chassis, and Stands."
  },
  {
    id: 194,
    question: "When inspecting your motorcycle's control cables, what should you look for?",
    options: [
      "Make sure the cables are painted to match the fairings",
      "Look for fraying, kinks, cuts, or sticking in the cable operation, and replace damaged cables immediately",
      "Verify that the cables can flex at least 15 inches sideways",
      "Ensure the cable covers are completely dry and dusty"
    ],
    correctAnswerIndex: 1,
    explanation: "Frayed or sticky cables can snap or jam while riding. Regular inspection and lubrication prevent control failures."
  },
  {
    id: 195,
    question: "What is the danger of adjusting your motorcycle's drive chain too tight?",
    options: [
      "The chain will slip off the sprockets and spin freely",
      "It limits rear suspension travel, wears out bearings quickly, and can snap the chain under load",
      "It causes the engine to consume three times more fuel",
      "It makes the tires lose tread depth immediately"
    ],
    correctAnswerIndex: 1,
    explanation: "A tight chain binds as the swingarm moves, which can wear out shaft seals, damage sprockets, and snap the chain under load."
  },
  {
    id: 196,
    question: "What is the best body posture when riding over rough tracks or obstacles?",
    options: [
      "Lean fully backward with your arms straight and stiff",
      "Keep your knees locked and sit firmly back on the seat",
      "Rise slightly off the seat, bend your elbows and knees to absorb impacts, and keep look straight forward",
      "Slide forward onto the fuel tank and close your eyes"
    ],
    correctAnswerIndex: 2,
    explanation: "Rising slightly off the seat lets your knees and elbows flex, absorbing the bump so you can maintain stability."
  },
  {
    id: 197,
    question: "Under what conditions is it legal to ride a motorcycle on the paved shoulder of a Minnesota freeway?",
    options: [
      "Only when overtaking slow-moving farm vehicles on the right",
      "Only during heavy peak rush hours to bypass traffic jams",
      "Only in emergency situations, or when directed by law enforcement/construction flags",
      "Whenever you are riding with a passenger on a permit"
    ],
    correctAnswerIndex: 2,
    explanation: "The shoulder is for emergency use only. Riding there to bypass traffic is illegal and carries heavy penalties."
  },
  {
    id: 198,
    question: "When riding through a designated road work or construction zone, what is the safest approach?",
    options: [
      "Accelerate to clear the dusty area as fast as possible",
      "Reduce speed, monitor signs, watch for loose gravel, pavers, or metal grates, and maintain a larger space cushion",
      "Weave between traffic cones to practice low-speed turns",
      "Turn off your headlights to prevent drawing dust towards your face"
    ],
    correctAnswerIndex: 1,
    explanation: "Work zones present hazards like loose gravel, uneven lanes, and heavy machinery. Slowing down and staying alert is the safest approach."
  },
  {
    id: 199,
    question: "How should you signal a hazard on the road (pothole, animal) to riders behind you in a group?",
    options: [
      "Point with your hand (for hazards on the left) or extend your foot toward the road (for hazards on the right)",
      "Slam on your brakes suddenly to force them to stop",
      "Turn off your motorcycle key temporarily",
      "Honk your horn twice and accelerate rapidly"
    ],
    correctAnswerIndex: 0,
    explanation: "Pointing with your hand or extending your foot warns riders behind of hazards (potholes, debris) so they can avoid them."
  },
  {
    id: 200,
    question: "Under Minnesota law, which equipment must a motorcycle have to be fully street-legal?",
    options: [
      "At least one headlight, a taillight, a brake light, turn signals, at least one rearview mirror, a horn, and a functioning muffler system",
      "A racing exhaust pipe and dual high-intensity neon underglow bars",
      "A passenger backrest and leather side saddlebags",
      "At least three rearview mirrors and an automatic cruise control"
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law requires specific safety equipment, including headlights, taillights, brake lights, turn signals, a horn, mirrors, and a legal muffler, to operate on public roads."
  }
];

