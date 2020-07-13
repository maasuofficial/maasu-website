import React, { FC, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import querystring from 'querystring'
import fetch from 'isomorphic-fetch'

type Props = RouteComponentProps & {}

export const ContactContainer: FC<Props> = () => {
  useDocumentTitle('Contact')
  const [submissionMsg, setSubmissionMsg] = useState('')

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, message } = e.target as any

    const response = {
      'entry.761143299': name.value,
      'entry.390586168': 'ecc@maasu.org',
      'entry.1997635310': email.value,
      'entry.596068453': message.value,
    }

    const formData = querystring.stringify(response)

    const url = `https://docs.google.com/forms/d/e/1FAIpQLSc17EG7ml0EG9Kb6JYED6lIaZhaDKZmK3NxPmOjp1vErzo0Ag/formResponse?${formData}`

    const options = {
      method: 'POST',
      mode: 'no-cors',
    }

    try {
      await fetch(url, options as RequestInit)
      setSubmissionMsg('Your message was sent.')
    } catch (e) {
      setSubmissionMsg(`Unable to send message: ${e.message}`)
    }
  }

  const styles = {
    border: '2px solid var(--palette-text-main)',
  }

  return (
    <div className="container py6">
      <h4 className="title4">Contact MAASU</h4>
      <p>
        Any questions? Send us a message and we'll get back to you as soon as
        possible!
      </p>

      <form className="mxa w-100" onSubmit={handleFormSubmit}>
        <input
          className="w-100 fs0 my3 pa3 ffhind bgc-bg-main"
          style={styles}
          type="text"
          required
          name="name"
          placeholder="First and last name"
        />
        <input
          className="w-100 fs0 my3 pa3 ffhind bgc-bg-main"
          style={styles}
          type="email"
          required
          name="email"
          placeholder="Email"
        />
        <textarea
          className="w-100 fs0 my3 pa3 ffhind bgc-bg-main"
          style={styles}
          required
          name="message"
          placeholder="Message"
        ></textarea>
        {submissionMsg ? (
          <div
            className="w-100 tc fs0 ffhind my3 fw700 pa3 bgc-bg-main fgc-text-main"
            style={styles}
          >
            {submissionMsg}
          </div>
        ) : (
          <button
            className="w-100 fs0 ffhind my3 fw700 pa3 tr-2 hov-fgc-text-main fgc-bg-main hov-bgc-bg-main bgc-text-main"
            style={styles}
            type="submit"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  )
}
