/**
 * @jest-environment jsdom
 */

import { expect, jest, test, describe, beforeEach } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import { useFormStatus } from 'react-dom';
import { SubmitButton } from './button';

// Mock useFormStatus to return pending as false
jest.mock('react-dom', () => ({
    ...jest.requireActual('react-dom') as Object,
    useFormStatus: jest.fn(),
}));

const mockUseFormStatus = jest.mocked(useFormStatus);

describe('SubmitButton', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders with resolved text when not pending', () => {
        mockUseFormStatus.mockReturnValue({
            pending: false,
            data: null,
            method: null,
            action: null
        });

        render(<SubmitButton resolvedText='Next' pendingText='Searching...'  />);

        expect(screen.getByRole('button')).toHaveTextContent('Next');
        expect(screen.getByRole('button')).not.toBeDisabled();
    });

    test('renders with pending text when pending', () => {
        mockUseFormStatus.mockReturnValue({
            pending: true,
            data: new FormData(),
            method: 'POST',
            action: 'submit'
        });

        render(<SubmitButton resolvedText='Next' pendingText='Searching...'  />);

        expect(screen.getByRole('button')).toHaveTextContent('Searching...');
        expect(screen.getByRole('button')).toBeDisabled();
    });
});