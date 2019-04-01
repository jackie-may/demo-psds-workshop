import {
  AsideLayout,
  EqualColumnLayout,
  PageHeadingLayout
} from '@pluralsight/ps-design-system-layout/react'
import Avatar from '@pluralsight/ps-design-system-avatar/react'
import Button from '@pluralsight/ps-design-system-button/react'
import Card from '@pluralsight/ps-design-system-card/react'
import Dialog from '@pluralsight/ps-design-system-dialog/react'
import Form from '@pluralsight/ps-design-system-form/react'
import { Heading } from '@pluralsight/ps-design-system-text/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import Link from '@pluralsight/ps-design-system-link/react'
import React, { useState } from 'react'
import Row from '@pluralsight/ps-design-system-row/react'
import styleable from 'react-styleable'
import Switch from '@pluralsight/ps-design-system-switch/react'
import Tag from '@pluralsight/ps-design-system-tag/react'
import TextInput from '@pluralsight/ps-design-system-textinput/react'

import css from './app.module.css'

export default styleable(css)(function App(props) {
  const [isEdit, setEdit] = useState(false)
  const [name, setName] = useState('Jake Trent')
  const [title, setTitle] = useState('Software Creator')
  const [isPublic, setPublic] = useState(false)

  const interests = [
    'data visualization',
    'es6',
    'lambdaz',
    'interfaces',
    'js',
    'leadership',
    'node'
  ]
  const skills = [
    ['React', '200'],
    ['JS', '800'],
    ['Node.js', '150'],
    ['Graphql', '1500']
  ]
  const learning = [
    ['React: Getting Started', 'Samer Buna', 15],
    ['Styling React Components', 'Jake Trent', 100],
    ['End User Security Awareness', 'Brien Posey', 24]
  ]

  return (
    <div className="app">
      <AsideLayout
        aside={
          <AsideLayout.Aside className={props.css.aside}>
            <Avatar
              name={name}
              size={Avatar.sizes.xLarge}
              src="https://gravatar.com/avatar/63a1fa126f541c0f0ecf1d74f7a40640?s=320&r=g&d=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fps-cdn%2Fdesign-system%2Fassets%2Ftransparent.gif"
            />
            <header>
              <Heading className={props.css.authorName}>
                <h1>{name}</h1>
              </Heading>
              <Heading
                className={props.css.authorDetail}
                size={Heading.sizes.medium}
              >
                <h2>{title}</h2>
              </Heading>
              <Heading
                className={props.css.authorDetail}
                size={Heading.sizes.medium}
              >
                <h2>
                  <Icon
                    id={Icon.ids.home}
                    size={Icon.sizes.small}
                    className={props.css.authorDetailIcon}
                  />
                  Pluralsight
                </h2>
              </Heading>
              {isPublic && (
                <Link>
                  <a href="/public/url" className={props.css.authorLink}>
                    <Icon id={Icon.ids.link} />
                    Public profile URL
                  </a>
                </Link>
              )}
            </header>

            <Heading size={Heading.sizes.smallCaps}>
              <h2>Interests You Follow</h2>
            </Heading>
            <div className={props.css.tags}>
              {interests.map(interest => (
                <Tag key={interest} size={Tag.sizes.small}>
                  {interest}
                </Tag>
              ))}
            </div>
          </AsideLayout.Aside>
        }
        main={
          <AsideLayout.Main>
            <PageHeadingLayout
              actions={[
                <Button
                  appearance={Button.appearances.stroke}
                  key="edit"
                  onClick={_ => setEdit(true)}
                >
                  Edit
                </Button>
              ]}
              heading={<h3>Meet the {title}</h3>}
            >
              <Heading size={Heading.sizes.medium}>
                <h3>Skills</h3>
              </Heading>
              <EqualColumnLayout>
                <ul className={props.css.skills}>
                  {skills.map(([skill, amt], i) => (
                    <li key={skill}>
                      <Card
                        title={<Card.Title>{skill}</Card.Title>}
                        image={
                          <Card.Image
                            src={`https://design-system.pluralsight.com/static/img/course${(i %
                              4) +
                              1}.jpg`}
                          />
                        }
                        metadata2={[amt + 'm watched']}
                      />
                    </li>
                  ))}
                </ul>
              </EqualColumnLayout>

              <Heading size={Heading.sizes.medium}>
                <h3>Learning</h3>
              </Heading>
              {learning.map(([title, author, progress], i) => (
                <Row
                  key={title}
                  title={title}
                  progress={progress}
                  image={
                    <Row.Image
                      src={`https://design-system.pluralsight.com/static/img/course${(i %
                        4) +
                        1}.jpg`}
                    />
                  }
                  metadata1={[author, 'Advanced']}
                />
              ))}
            </PageHeadingLayout>
          </AsideLayout.Main>
        }
      />
      {isEdit && (
        <Dialog modal onClose={_ => setEdit(false)}>
          <Form.VerticalLayout>
            <Heading>
              <h2>Edit profile</h2>
            </Heading>
            <TextInput
              onChange={evt => setName(evt.target.value)}
              name="name"
              label="Your name"
              placeholder="Name"
              value={name}
            />
            <TextInput
              onChange={evt => setTitle(evt.target.value)}
              name="title"
              label="Your title"
              placeholder="Title"
              value={title}
            />
            <Switch checked={isPublic} onClick={_ => setPublic(!isPublic)}>
              Profile is public
            </Switch>
            <Form.ButtonRow>
              <Button onClick={_ => setEdit(false)}>Close</Button>
            </Form.ButtonRow>
          </Form.VerticalLayout>
        </Dialog>
      )}
    </div>
  )
})
