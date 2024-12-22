### 🐈‍⬛User Persona 5: Kiki
**FAF Hackathon 2024**

- **Name:** Kiki The Kitten
- **Age:** IDK (she’s a cat)
- **Education:** Happiness School of Santa
- **Home:** FAF 
- **Family:** Big One
- **Occupation:** Santa’s Helper
- **Likes:**
  - Bringing joy and cheer to others 🎉
  - Mischief and playful interactions 😜
  - Engaging with people, especially students, and children 👩‍🏫👶
  - Spending time with her family ❤️
- **Dislikes:**
  - Problems left unsolved ❓
  - Lack of creativity and festive spirit 🎄❌ 
  - Boring parties 💤
- **Goals:**
  - To foster a paws-itive attitude and morale
  - To spread festive cheer and ensure everyone feels included and supported
- **Frustrations:**
  - Being overlooked or underestimated due to her playful nature
  - Challenges in connecting with people
  - The inability to make everyone happy
  - Situations where her joy-spreading efforts are hindered

Kiki, the FAF mascot, is a plushie black cat. Kiki majored in Cuteness and minored in Mischief. As part of her education, the thing she enjoyed most was the course on spreading joy and cheer. Now, as the holiday season approaches, Kiki seeks to be a part of people’s daily lives, for coding support, morale-boosting, and ensuring paws-itive attitude, reminding them that every problem has a solution. Help Kiki in its adventure, by developing a coding companion app, a morale-boosting chatbot, an engaging augmented reality game, or any creative means.

Embrace the festive spirit and let your creativity and ingenuity run wild. Work together in a team to make Kiki a beloved part of our tech community, bringing joy and support to all - children, students.

## Project Ideas
### 1. Kikinator (Primary Choice)
- FAF community-focused Akinator-style game
- Features famous personalities within FAF community
- Interactive Q&A format (yes/no/maybe/probably/probably not)
- Target audience: UTM students and faculty

## Problem Statement & Differentiation

### What problem are we solving?
- Limited engagement and connection within the FAF community
- Difficulty for new students to learn about notable FAF personalities
- Lack of interactive tools that celebrate FAF's culture and history
- Need for an entertaining way to bridge generational gaps in FAF

### How are we different from Akinator?
1. **Specialized Focus**
   - Exclusively focused on FAF community members
   - Custom-tailored questions relevant to UTM context
   - Local cultural understanding and references

2. **Community Building**
   - Promotes knowledge sharing about FAF history
   - Strengthens community bonds through shared experiences
   - Creates engagement between different FAF generations

3. **Educational Value**
   - Teaches new students about important FAF figures
   - Preserves institutional knowledge in an interactive format
   - Combines entertainment with community learning

## Project Development: Kikinator

### Core Features
1. **Interactive Question System**
   - Simplified answer options:
     - Yes (1)
     - No (-1)
     - Not Sure (0)
   - Confirmation step for guesses
   - Option to add new personalities

2. **FAF Community Database**
   - Professors and teaching staff
   - Notable alumni
   - Student organizations leaders
   - Administrative staff
   - Department heads

3. **Gamification Elements**
   - Score tracking for correct guesses
   - Achievement system (e.g., "Professor Hunter", "Staff Explorer")
   - Leaderboard for most accurate players
   - Option to suggest new personalities

4. **Community Features**
   - Share results on social media with character image
   - Add new characters through simple form
   - Character photos/avatars support
   - Community voting on new additions

### Technical Architecture
1. **Frontend**
   - HTML, CSS, JavaScript
   - Responsive design with Christmas theme 🎄
   - Animated question transitions
   - Confetti effect on successful guess 🎉
   - Local storage for game state

2. **Backend**
   - Python Flask server
   - Simple REST API endpoints
   - JSON files for data storage
   - Basic caching for performance

3. **Data Storage**
   - Questions database in memory
   - Character database with:
     - Basic info (name, role)
     - Answer patterns
     - Character images/photos
     - Submission metadata

4. **Fun Features**
   - "Kiki thinks..." animation with different states:
     - 😺 Welcome state
     - 🤔 Thinking state
     - 😸 Making a guess
     - 😿 Wrong guess
     - 🎉 Give up and add new person
   - Kiki States:
     'welcome': {
       'emoji': '😺',
       'message': "Hi! I'm Kiki, and I love guessing FAF personalities!"
     },
     'thinking': {
       'emoji': '🤔',
       'message': "Hmm... let me think about this one..."
     },
     'confident': {
       'emoji': '😸',
       'message': "I think I got it! Is it {name}?"
     },
     'very_confident': {
       'emoji': '🎯',
       'message': "I'm absolutely sure it's {name}!"
     },
     'uncertain': {
       'emoji': '😿',
       'message': "I'm not quite sure yet, need more clues..."
     },
     'confused': {
       'emoji': '😺❓',
       'message': "This is tricky! Can you help me with more answers?"
     }
   - Confirmation dialog for guesses
   - Multiple guess attempts
   - New person submission form

## 12-Hour Timeline

### Hour 1-2: Setup & Planning
- [ ] Setup Flask project
- [ ] Create basic HTML structure
- [ ] Initialize JSON data files
- [ ] Task distribution

### Hour 3-4: Core Development
- [ ] Basic frontend UI with animations
- [ ] Question-answer flow with transitions
- [ ] Character database creation
- [ ] API endpoints and caching

### Hour 5-6: Integration
- [ ] Connect frontend to backend
- [ ] Implement guessing logic
- [ ] Test core functionality

### Hour 7-8: Polish
- [ ] UI improvements
- [ ] Add more characters/questions
- [ ] Bug fixes

### Hour 9-10: Final Touches
- [ ] Testing
- [ ] Content verification
- [ ] Performance optimization

### Hour 11-12: Presentation
- [ ] Prepare demo
- [ ] Create slides
- [ ] Practice pitch

## Success Metrics
1. **Technical**
   - Working prototype
   - Smooth user experience
   - Accurate guessing algorithm
   - Fast response times

2. **User Experience**
   - Intuitive interface
   - Engaging gameplay
   - Social sharing features
   - Community involvement

3. **Content Quality**
   - Accurate personality data
   - Well-formulated questions
   - Appropriate difficulty level
   - Regular updates capability

## Judging Criteria

### 1. Effectiveness of Solution (20 Points)
- **Problem-Solution Fit (10 Points)**
  - How well does the solution address the primary needs and challenges derived from the provided user personas?
  -  Evaluate how effectively the proposed solution tackles key pain points, delivering meaningful benefits aligned with the users' goals and expectations.
  - Alignment with user personas
  - Address key pain points
- **Impact and Value (10 Points)**
  - Measurable improvements
  Does the solution provide measurable improvements or outcomes?
  - Clear user benefits
  Is there clear evidence of how the solution benefits users in the context of the challenge (e.g., improving work-life balance, enhancing learning experiences)?

### 2. Use of Technology and System Architecture (20 Points)
- **Technology Innovation (10 Points)**
  - Effective application of relevant technologies
  How effectively does the solution apply relevant technologies to address user needs based on the provided personas? 
  Evaluate whether the technologies are thoughtfully integrated, enhancing functionality, efficiency, or user experience. 
  - Thoughtful integration enhancing functionality and user experience
  Solutions demonstrating deeper technological innovation, such as custom-built systems, advanced algorithms, or unique technology combinations, will receive higher scores.
  Simpler implementations relying on straightforward integrations or single-purpose APIs will score lower unless they provide significant added value beyond basic functionality. 
  
- **System Architecture (10 Points)**
  - Alignment with user needs, flows, and processes
  How effectively does the solution’s architecture align with user needs, flows, and processes?
  Evaluate the reasoning behind the design decisions and how well the architecture supports the intended user experience.
  - Thoughtful design decisions supporting user experience
  The solution should demonstrate thoughtful integration of components that address user requirements.

### 3. Functional and Working Prototype (30 Points)
- **Prototyping and Functionality (20 Points)**
  - Effective demonstration of key features
  Does the prototype effectively demonstrate the key features of the solution?
  - Fully functional with minimal issues
  Is it fully functional with minimal issues, showcasing how it works in real-world scenarios?
- **Usability and User Experience (10 Points)**
  - User-friendly and intuitive
  How user-friendly and intuitive is the prototype?
  - Seamless user experience
  Does it offer a seamless user experience, meeting the needs and expectations of the target audience?

### 4. Presentation and Communication (25 Points)
- **Clarity and Structure (10 Points)**
  - Clear and effective communication of problem, solution, and implementation
  How clearly and effectively is the problem, solution, and implementation communicated?
  Is the presentation well-structured and easy to understand?
  - Well-structured and easy to understand
  Does the presentation contain the user persona reference and explanation?
  Also don’t forget that the presentation should be 5 minutes long at maximum.
- **Live or Video Demonstration (10 Points)**
  - Compelling demonstration showcasing core functionality
  Does the team provide a compelling demonstration that showcases the core functionality of the solution in action?
  - Clear highlight of main features and use cases
  The demonstration should clearly highlight the main features and use cases, illustrating how the solution addresses user needs.
  It should effectively show the solution working as intended, offering a clear view of its real-world value and impact.
- **Team Collaboration and Communication (5 Points)**
  - Effective team collaboration and communication during the pitch
  How well does the team collaborate and communicate during the pitch?
  - Cohesive understanding of solution and its impact
  Even if only one person presents, the entire team should be involved in the presentation and Q&A, demonstrating a clear, cohesive understanding of the solution and its impact.
  Effective communication of the vision, user benefits, and functionality, supported by all team members, will receive higher scores.

### 5. Innovation and Creativity (5 Points)
- **Originality of the Solution (5 Points)**
  - Unique and innovative approach
  How unique and innovative is the approach?
  Does the solution offer new ideas or perspectives that distinguish it from existing solutions?
  - Novel concepts, methodologies, or strategies
  Evaluate whether the team introduces novel concepts, methodologies, or strategies that push the boundaries of conventional thinking and effectively address the challenge in an unexpected or impactful way.

Total Possible Points: 100 Points

Note:
Addressing the problem effectively and focusing on the judging criteria is essential to showcase your solution's innovation and impact.

## Development Plan

### Roles and Responsibilities
1. **Frontend Development**
2. **Backend + Database**
3. **Graphics and Design**
4. **Anything that is missing**

### Timeline (12-Hour Plan)
1. MVP Development (4 hours)
2. Database Population (3 hours)
3. UI/UX Refinement (2 hours)
4. Presentation Preparation (2 hours)
5. Final Testing and Refinement (1 hour)

## Presentation Structure
1. Problem Statement
2. Target Group Analysis
3. Solution Description & Implementation
4. Live Demo